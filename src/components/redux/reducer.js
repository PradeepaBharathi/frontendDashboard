const initialState = {
    user: [],
    error:null
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_USER":
        return {
          ...state,
          user: [...state.user, action.payload],
          error: null,
        };
      case "REGISTER_ERROR":
        return {
          ...state,

          error: action.payload,
        };
      case "LOGIN_USER":
        return {
          ...state,
          user: [...state.user, action.payload],
          error: null,
        };
      case "LOGIN_ERROR":
        return {
          ...state,

          error: action.payload,
        };
      case "GET_USER":
        return {
          ...state,
          user: action.payload,
        };
      case "GET_ERROR":
        return {
          ...state,

          error: action.payload,
        };
      default:
        return state;
    }
}

export default formReducer