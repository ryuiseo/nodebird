
export const initialState ={
    mainPosts:[{
        id: 1, 
        User:{
            id:1, 
            nickname: 'anne',
        },
        content: '첫번째 게시글 #해시태그',
        Images: [{
            src: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/6N4bsOvcW3s',
        },{
            src: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/G9QPsPvw63g',
        },{
            src: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/Cubnd4g0F3c',
        }],
        Comments: [{
            User: {
                nickname: 'jenna',
            },
            content: 'happy gummy bear',
        }, {
            User: {
                nickname: 'hero',
            },
            content: 'jelly belly',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost ={
    type :ADD_POST,
};
const dummyPost={
    id:2,
    content: 'dummy data',
    User:{
        id:1,
        nickname: 'jenna',
    },
    Images: [],
    Comments: [],
}

const reducer =(state = initialState, action)=>{
    switch (action.type){
        case ADD_POST: 
        return {
            ...state,
            mainPosts: [dummyPost, ...state.mainPosts],
            postAdded: true,
        }
        default: 
        return state;
    }
}
export default reducer;