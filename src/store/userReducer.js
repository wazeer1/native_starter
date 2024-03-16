const initialState = {
  isVerified: true,
  access_token: null,
  username: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        isVerified:
          action.payload.isVerified !== undefined
            ? action.payload.isVerified
            : state.isVerified,
        access_token:
          action.payload.access_token !== undefined
            ? action.payload.access_token
            : state.access_token,
        username:
          action.payload.username !== undefined
            ? action.payload.username
            : state.username,
      };
    case 'RESET_USER':
      return initialState; // Reset the state to the initial state
    default:
      return state;
  }
}

export default userReducer;
