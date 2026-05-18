import deleteCookies from "./deleteCookie.js";
import locateTo from "./locateTo.js";

// Fucntion logic for log out button
const logout = (data) => {
  // if there is no button return
  if (!data) {
    return;
  }
// Function to handle the logout. Delete cookies and redirect to main page
  const handleLogoutBtn = () => {
    deleteCookies();
    locateTo("../index.html");
  };
  // Getting button from DOM and listening to it by click
  document
    .querySelector(".logout-btn")
    .addEventListener("click", handleLogoutBtn);
};

export default logout;
