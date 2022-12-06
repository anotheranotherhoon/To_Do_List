export const setToken = (token : string) => {
  window.localStorage.setItem('token', token);
};

export const getToken = () => {
  return window.localStorage.getItem('token')
};

export const handleLogOut = () => {
  window.localStorage.removeItem('token')
  window.location.reload()
}