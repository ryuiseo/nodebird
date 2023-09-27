import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Card, Popover, Button, Avatar} from 'antd';
import {RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined} from '@ant-design/icons';
import PostImages from './PostImages';

const PostCard=({post})=>{
    const {me} = useSelector((state)=>state.user);
    const id= me?.id;

    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key='retweet'/>,
                    <HeartOutlined key='heart'/>,
                    <MessageOutlined key='comment'/>,
                    <Popover key='more' content={(
                        <Button.Group>
                            {id && post.User.id === id ? (<>
                                <Button>수정</Button>
                            <Button type='danger'>삭제</Button>
                            </>
                            ) :
                            <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card.Meta 
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}/>
                <Button></Button>
            </Card>
            {/* <CommentForm />
            <Comments /> */}
        </div>
    )
}
PostCard.propTypes ={
   post: PropTypes.shape({
    id:PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
   
   }).isRequired,
}
export default PostCard;