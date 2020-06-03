export const isAuthenticated = () => localStorage.getItem("TOKEN_KEY") !== (null && "undefined");
export const getToken = () => localStorage.getItem("TOKEN_KEY")
