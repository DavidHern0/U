const nombresBien = ["Amor", "Bebé", "Bebito", "Amorcito", "Bonito", "Guapo", "Lindo", "Cuqui"];
const nombresMal = ["Tonto", "Puto", "Gilipollas", "Subnormal", "Idiota", "Payaso", "Limpiacacas"];

document.addEventListener("DOMContentLoaded", () => {
    const options = document.getElementsByName("option");
    const button = document.querySelector("button");
    const resultContainer = document.getElementById("result");
    const countdownKey = "countdownEndTime";
    const buttonVisibleKey = "isButtonVisible";

    const savedEndTime = localStorage.getItem(countdownKey);
    const isButtonVisible = JSON.parse(localStorage.getItem(buttonVisibleKey) || "true");

    if (!isButtonVisible && savedEndTime && new Date(savedEndTime) > new Date()) {
        button.style.display = "none";
        disableOptions(true);
        startCountdown(Math.floor((new Date(savedEndTime) - new Date()) / 1000));
    } else {
        localStorage.setItem(buttonVisibleKey, true);
        button.style.display = "none";
        disableOptions(false);
    }

    options.forEach(option => {
        option.addEventListener("change", () => {
            button.style.display = "block";
            localStorage.setItem(buttonVisibleKey, true);
            button.innerText = option.value === "mal" ? "Insultar" : "Amar";
        });
    });

    button.addEventListener("click", () => {
        button.style.display = "none";
        disableOptions(true);
        localStorage.setItem(buttonVisibleKey, false);

        const countdownDuration = 3600;
        const endTime = new Date(new Date().getTime() + countdownDuration * 1000);
        localStorage.setItem(countdownKey, endTime.toISOString());
        startCountdown(countdownDuration);
    });

    function disableOptions(disable) {
        options.forEach(option => {
            option.disabled = disable;
        });
    }

    function startCountdown(seconds) {
        let remainingTime = seconds;

        let countdown = document.getElementById("countdown");
        if (!countdown) {
            countdown = document.createElement("div");
            countdown.setAttribute("id", "countdown");
            countdown.style.fontSize = "1.5em";
            countdown.style.marginTop = "20px";
            countdown.style.color = "#574bdb";
            resultContainer.appendChild(countdown);
        }

        const interval = setInterval(() => {
            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const secs = remainingTime % 60;

            countdown.innerText = `Próxima tirada: ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

            remainingTime--;

            if (remainingTime < 0) {
                clearInterval(interval);
                countdown.remove();
                localStorage.removeItem(countdownKey);
                localStorage.setItem(buttonVisibleKey, true);
                button.style.display = "block";
                disableOptions(false);
            }
        }, 1000);
    }
});


function generateName() {
    const options = document.getElementsByName('option');
    let selectedOption = null;

    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    if (!selectedOption) {
        document.getElementById('result').textContent = "Por favor, selecciona una opción.";
        return;
    }

    const names = selectedOption === "bien" ? nombresBien : nombresMal;
    const randomName = names[Math.floor(Math.random() * names.length)];

    document.getElementById('result').textContent = `${randomName}`;
}