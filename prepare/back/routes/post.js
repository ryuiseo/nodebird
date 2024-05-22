const express = require("express");
const { Post, Image, Comment, User } = require("../models");
const { isLoggedIn } = require("./middlewares");
const router = express.Router();

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      userId: req.user.id,
    });
    const fullPost = await Post.findOne({
      whder: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
        },
        {
          model: User,
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.delete("/", (req, res) => {
  res.json({ id: 1 });
});

router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  try {
    //존재하지않는 게시글에 댓글을 달 경우를 검사한다.
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    const comment = await Comment.create({
      content: teq.body.content,
      PostId: req.params.postId,
      UserId: req.user.id,
    });
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.delete("/", (req, res) => {
  res.json({ id: 1 });
});

module.exports = router;
