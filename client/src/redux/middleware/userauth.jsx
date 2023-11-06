const init = {
  id: "",
  email: "",
  phone: "",
  username: "",
  avatar_url: "",
  role: "",
};

function userReducer(state = init, action) {
  if (action.type === "login") {
    return {
      ...state,
      id: action.payload.id,
      email: action.payload.email,
      admin_name: action.payload.name,
      username: action.payload.username,
      token: action.payload.token,
    };
  } else if (action.type === "logout") {
    return init;
  }

  return state;
}

export default userReducer;
