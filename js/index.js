'use strict'

const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const continueBtn = document.querySelector('.green');
const showAnswerBtn = document.querySelector('.red');
let progress = [];
let index = 0;

const question_answer = []
for (let index = 0; index < questions.length; index++) {
    const obj = {
        question: questions[index],
        answer: answers[index],
    }
    question_answer.push(obj)
}


const clickContinue = () => {
    index = getIndex();
    progress.push(index);
    answer.textContent = '';
    question.textContent = question_answer[index].question;
}


continueBtn.addEventListener('click', clickContinue)
showAnswerBtn.addEventListener('click', () => {
    answer.textContent = question_answer[index].answer;
})



// функции
function getIndex() {

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (progress.length === question_answer.length - 1) {
        progress.length = 0
        return 0;
    } else {
        let i = getRandomInt(0, question_answer.length - 1);
        if (progress.includes(i)) {
            getIndex()
        }
        return i
    }
}

