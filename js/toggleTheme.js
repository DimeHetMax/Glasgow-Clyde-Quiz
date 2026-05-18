const THEME_STORAGE_KEY = "quiz-theme";
const GLASS_THEME_CLASS = "glass-theme";

// toggle theme function
export default function toggleTheme(toggleElement) {
  // if there is no such element than return
  if (!toggleElement) {
    return;
  }
//  The function toggle class and add to checkbox true/false, set the localStorage
  const applyTheme = (isEnabled) => {
    document.body.classList.toggle(GLASS_THEME_CLASS, isEnabled);
    toggleElement.checked = isEnabled;
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      isEnabled ? GLASS_THEME_CLASS : "",
    );
  };
// check the localStorage and call the applytheme function
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  applyTheme(savedTheme === GLASS_THEME_CLASS);

  // Listening on change the checkbox and call the applytheme function
  toggleElement.addEventListener("change", (event) => {
    applyTheme(event.currentTarget.checked);
  });
}
