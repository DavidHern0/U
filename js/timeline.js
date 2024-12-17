document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.clickable-img').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('active');
        });
    });

    const finElement = document.getElementById('fin');
    const timelineItems = document.querySelectorAll('.timeline-item');
    let currentIndex = 0;
    const nextDayBtn = document.getElementById('next-day-btn');
    const showAllCheckbox = document.getElementById('show-all-checkbox');

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
            finElement.style.display = 'flex'
            nextDayBtn.textContent = 'Todos los días mostrados';
            nextDayBtn.disabled = true;
            nextDayBtn.style.display = 'none';
        }
    };

    const showAllDays = () => {
        timelineItems.forEach(item => {
            item.style.display = 'block';
            item.classList.add('visible');
        });
        nextDayBtn.style.display = 'none';
        finElement.style.display = 'flex';
        localStorage.setItem('showAll', 'true');
    };

    const resetTimeline = () => {
        currentIndex = 0;
        nextDayBtn.style.display = 'block';
        timelineItems.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('visible');
        });
        showNextDay();
        localStorage.setItem('showAll', 'false');
    };

    nextDayBtn.addEventListener('click', showNextDay);

    showAllCheckbox.addEventListener('change', () => {
        if (showAllCheckbox.checked) {
            showAllDays();
        } else {
            resetTimeline();
        }
    });

    const showAllStored = localStorage.getItem('showAll');
    if (showAllStored === 'true') {
        showAllCheckbox.checked = true;
        showAllDays();
    } else {
        resetTimeline();
    }
});
