import getCookie from "./getCookie.js";
import locateTo from "./locateTo.js";

const userName = getCookie()
if(userName){
 locateTo("../pages/menu.html")
}