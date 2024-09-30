document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.clickable-img').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('active');
        });
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    let currentIndex = 0
    const nextDayBtn = document.getElementById('next-day-btn');

    const showNextDay = () => {
        if (currentIndex < timelineItems.length) {
            timelineItems[currentIndex].style.display = 'block';

            timelineItems[currentIndex].offsetHeight;
            timelineItems[currentIndex].classList.add('visible');

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');
            buttonContainer.appendChild(nextDayBtn);
            timelineItems[currentIndex].appendChild(buttonContainer);
            nextDayBtn.style.display = 'block';

            currentIndex++;
        } else {
            nextDayBtn.textContent = 'Todos los días mostrados';
            nextDayBtn.disabled = true;
            nextDayBtn.style.display = 'none';
        }
    };

    nextDayBtn.addEventListener('click', showNextDay);
    showNextDay();
});