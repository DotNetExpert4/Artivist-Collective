export const ACTION_TYPES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const login = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("isLoggedIn", true);
  return {
    type: ACTION_TYPES.LOGIN,
    accessToken,
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};
