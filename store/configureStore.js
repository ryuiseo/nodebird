import createWrapper from 'next-redux-wrapper';
import {createStore} from 'redux';
import reducer from '../reducers';

const configureStore=()=>{
    const store = creatStore(reducer);
    store.dispatch({
        type: 'CHANGE_NICKNAME',
        data: 'boogie',
    })
    return store;
}
const wrapper = createWrapper(configureStore, {debug: process.env.NODE_ENV === 'development',});

export default wrapper;