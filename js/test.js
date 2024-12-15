document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const startContainer = document.getElementById("start-container");
    const quizContainer = document.querySelector(".container");
    const finalMessage = document.getElementById("final-container");
    const finalScore = document.getElementById("final-score");
    const questionsContainer = document.getElementById("quiz");
    const questions = document.querySelectorAll(".question");

    let currentQuestion = 0;
    let incorrectAnswers = 0;

    quizContainer.style.display = "none";

    startButton.addEventListener("click", () => {
        startContainer.style.display = "none";
        quizContainer.style.display = "block";
        showQuestion(currentQuestion);
    });

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
        questions.forEach((q, i) => {
            q.style.display = i === index ? "block" : "none";
        });
        shuffleAnswers(questions[index]);
    }

    questions.forEach((question, index) => {
        const buttons = question.querySelectorAll("button");
        let notFailed = true;

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
                            showFinalMessage();
                            quizContainer.style.display = "none";
                        }
                    }, 1500);
                } else {
                    if (notFailed) {
                        incorrectAnswers++;
                        notFailed = false;
                    }
                    e.target.style.backgroundColor = "#D32F2F";
                    e.target.disabled = true;
                    e.target.style.cursor = "not-allowed";
                    errorMessage.style.display = 'block';
                    errorMessage.style.color = "#D32F2F";
                }
            });
        });
    });

    function showFinalMessage() {
        quizContainer.innerHTML = "";
        finalMessage.style.display = "block";
        finalScore.textContent = `Has acertado ${questions.length - incorrectAnswers}/${questions.length} preguntas`;

        const finalImage = document.getElementById("final-image");

        const feedbackOptions = [
            { minScore: questions.length, src: "../media/assets/cat-cat-jumping.gif"},
            { minScore: !questions.length, src: "../media/assets/sus.gif"}
        ];
    
        const feedback = feedbackOptions.find(option => questions.length - incorrectAnswers >= option.minScore);
    
        finalImage.src = feedback.src;
        finalImage.alt = finalScore.textContent;
    }

    shuffleQuestions();
});
