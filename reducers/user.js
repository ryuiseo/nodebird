export const initialState = {
  isLoggendIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data) => {
  const state = getState();
  return (dispatch, getState) => {
    dispatch(loginRequestAction());
    axios
      .post("/api/login")
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginFailureAction(err));
      });
  };
};
export const logoutAction = (data) => {
  const state = getState();
  return (dispatch, getState) => {
    dispatch(logoutRequestAction());
    axios
      .post("/api/logout")
      .then((res) => {
        dispatch(logoutSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(logoutFailureAction(err));
      });
  };
};
//action creator
export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};
export const loginSuccessAction = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};
export const loginFailureAction = (data) => {
  return {
    type: "LOG_IN_FAILURE",
    data,
  };
};
export const logoutRequestAction = () => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};
export const logoutSuccessAction = () => {
  return {
    type: "LOG_OUT_SUCCESS",
  };
};
export const logoutFailureAction = () => {
  return {
    type: "LOG_OUT_FAILURE",
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};
export default reducer;
