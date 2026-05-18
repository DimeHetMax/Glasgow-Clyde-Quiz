import getCookie from "./getCookie.js";
import locateTo from "./locateTo.js";

// if there are cookies than user should be redirected to menu page
const userName = getCookie()
if(userName){
 locateTo("../pages/menu.html")
}