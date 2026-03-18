const THEME_STORAGE_KEY = "quiz-theme";
const GLASS_THEME_CLASS = "glass-theme";

export default function toggleTheme(toggleElement) {
  if (!toggleElement) {
    return;
  }

  const applyTheme = (isEnabled) => {
    document.body.classList.toggle(GLASS_THEME_CLASS, isEnabled);
    toggleElement.checked = isEnabled;
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      isEnabled ? GLASS_THEME_CLASS : "",
    );
  };

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  applyTheme(savedTheme === GLASS_THEME_CLASS);

  toggleElement.addEventListener("change", (event) => {
    applyTheme(event.currentTarget.checked);
  });
}
