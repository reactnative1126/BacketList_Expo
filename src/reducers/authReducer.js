const initialState = {
  email: "",
  password: "",
  isLogged: false,
  loginError: null,
  signupError: null,
  deleteError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error in login reducer");
      return {
        ...state,
        isLogged: false,
        loginError: action.err.message
      };
    case "LOGIN_SUCCESS":
      console.log("login success in login reducer");
      // this.props.navigation.navigate('Home');
      return {
        ...state,
        isLogged: true,
        loginError: null
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return {
        ...state,
        isLogged: false
      };

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        signupError: null,
        isLogged: true
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        isLogged: false,
        signupError: action.err.message
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        loginError: null,
        signupError: null
      };
      case "DELETE_SUCCESS":
        return {
          ...state,
          isLogged: false,
          deleteError: null,
        };
      case "DELETE_ERROR":
          return {
            ...state,
            deleteError: action.err.message,
          };
    default:
      return state;
  }
};

export default authReducer;
