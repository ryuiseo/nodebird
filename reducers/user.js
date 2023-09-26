export const initialState ={
    isLoggendIn: false,
    user: null,
    signUpData : {},
    loginData: {},
}

//action creator
export const loginAction=(data)=>{
    return {
        type: 'LOG_IN',
        data,
    }
};
export const logoutAction=(data)=>{
    return {
        type: 'LOG_OUT',
    }
};
const reducer =(state = initialState, action)=>{
    switch (action.type){
        case 'LOG_IN' :
            return {
                    ...state,
                    isLoggedIn : true,
                    user: action.data,
          
            };
        case 'LOG_OUT' :
            return {
                    ...state,
                    isLoggedIn : false,

            };
        default: 
        return state;
    }
}
export default reducer;