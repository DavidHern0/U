document.addEventListener("DOMContentLoaded", () => {
    const questionsContainer = document.getElementById("quiz");
    let currentQuestion = 0;
    
    function shuffleAnswers(question) {
        const buttons = Array.from(question.querySelectorAll("button"));
        const errorMessage = question.querySelector('.error-message');
        buttons.sort(() => Math.random() - 0.5);
        buttons.forEach(button => question.appendChild(button));
        question.appendChild(errorMessage);
    }

    function shuffleQuestions() {
        const questions = Array.from(questionsContainer.children);
        questions.sort(() => Math.random() - 0.5);
        questions.forEach(question => {
            questionsContainer.appendChild(question);
        });
    }

    function showQuestion(index) {
        const questions = document.querySelectorAll(".question");
        questions.forEach((q, i) => {
            q.style.display = i === index ? "block" : "none";
        });
        shuffleAnswers(questions[index]);
    }

    const questions = document.querySelectorAll(".question");
    questions.forEach((question, index) => {
        const buttons = question.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const isCorrect = e.target.dataset.answer === "correct";
                const errorMessage = question.querySelector('.error-message');
                let feedback = question.querySelector(".feedback");
                if (!feedback) {
                    feedback = document.createElement("p");
                    feedback.className = "feedback";
                    question.appendChild(feedback);
                }
                errorMessage.style.display = 'none'; 

                if (isCorrect) {
                    e.target.style.backgroundColor = "#4CAF50";
                    feedback.textContent = "¡Correcto! 🎉";
                    feedback.style.color = "#4CAF50";
                    buttons.forEach((btn) => (btn.disabled = true));
                    feedback.style.display = "block";

                    setTimeout(() => {
                        if (index + 1 < questions.length) {
                            showQuestion(index + 1);
                        } else {
                            document.getElementById("quiz").innerHTML = "<h2>¡Test completado!</h2>";
                        }
                    }, 2000);
                } else {
                    e.target.style.backgroundColor = "#D32F2F";
                    e.target.disabled = true;
                    e.target.style.cursor = "not-allowed";
                    errorMessage.style.display = 'block';
                    errorMessage.style.color = "#D32F2F";
                }
            });
        });
    });

    shuffleQuestions();
    showQuestion(currentQuestion);
});
