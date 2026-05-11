const deleteCookies = () => {
  document.cookie = `username=; path=/`;
  document.cookie = `email=; path=/`;
};

export default deleteCookies;

