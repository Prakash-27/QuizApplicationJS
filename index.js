const correctAnswer = ["D", "B", "C", "B", "D"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

// console.log(questions[1]);

form.addEventListener("submit", event => {
    event.preventDefault();
    // console.log("---");

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    // console.log(userAnswers);

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            // console.log("Correct Answer", index);
            score += 1;
            questions[index].classList.add("correct");
        } else {
            questions[index].classList.add("wrong");
        }
    });
    // console.log(score);

    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `you scored ${score}/5!`;
});



