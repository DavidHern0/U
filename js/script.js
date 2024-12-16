document.addEventListener('DOMContentLoaded', () => {
    const welcomePopup = document.getElementById('welcome-popup');
    const closePopupBtn = document.getElementById('close-popup-btn');

    if (welcomePopup) {
        if (!localStorage.getItem('popupShown')) {
            welcomePopup.style.display = 'flex';
        }
        if (closePopupBtn) {
            closePopupBtn.addEventListener('click', () => {
                welcomePopup.style.display = 'none';
                localStorage.setItem('popupShown', 'true');
            });
        }
    }
});
