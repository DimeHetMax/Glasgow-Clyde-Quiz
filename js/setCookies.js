const setCookie = ({name, email}) => {
  const expirationDays = 7;
  const date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);

  document.cookie = `username=${name}; expires=${date.toUTCString()}; path=/`;
  document.cookie = `email=${email}; expires=${date.toUTCString()}; path=/`;
};
export default setCookie;
