const addLogoutBtn = (switchBtn, userName) => {
  // console.log("addLogout =>", switchBtn, userName);
  if (!switchBtn) {
    return;
  }
  const html = `
  <div class="logout-wrapper">
     <p>Hello, ${userName}</p>
     <button class="logout-btn">
        <span class="logout-icon-wrapper">
            <svg class="exit-svg" width="20" height="20">
              <use href="../image/sprite.svg#icon-exit"></use>
            </svg>
        </span> log out
      </button>
  </div>`;
  switchBtn.insertAdjacentHTML("beforebegin", html);
};

export default addLogoutBtn;
