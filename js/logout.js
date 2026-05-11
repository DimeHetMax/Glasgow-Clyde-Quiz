import deleteCookies from "./deleteCookie.js";
import locateTo from "./locateTo.js";

const logout = (data) => {
  if (!data) {
    return;
  }
  const handleLogoutBtn = () => {
    deleteCookies();
    locateTo("../index.html");
  };
  document
    .querySelector(".logout-btn")
    .addEventListener("click", handleLogoutBtn);
};

export default logout;
