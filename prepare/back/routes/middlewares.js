exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next(); //괄호안에 내용을 넣으면 에러를 처리하고, 빈값이면 다음 미들웨어로 간다.
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};
exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인하지 않은 사용자만 접근 가능합니다.");
  }
};
