document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.clickable-img').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('active');
        });
    });
});
