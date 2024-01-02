const QuestionBank = [
    {
        Que: "Lives in Dhamnod ?",
        Ans: [
            { text: "Shrey", correct: false },
            { text: "Ujjawal", correct: true },
            { text: "Aman", correct: false },
            { text: "Bhamboo", correct: false }
        ]
    },
    {
        Que: "Lives in Gwalior ?",
        Ans: [
            { text: "Aman", correct: true },
            { text: "Shrey", correct: false },
            { text: "Bhamboo", correct: false },
            { text: "Ujjawal", correct: false }
        ]
    },
    {
        Que: "Lives in Ghaziabad ?",
        Ans: [
            { text: "Shrey", correct: true },
            { text: "Ujjawal", correct: false },
            { text: "Aman", correct: false },
            { text: "Bhamboo", correct: false }
        ]
    },
    {
        Que: "Lives in Rajasthan ?",
        Ans: [
            { text: "Aman", correct: false },
            { text: "Ujjawal", correct: false },
            { text: "Bhamboo", correct: true },
            { text: "Shrey", correct: false }
        ]
    }
]

const nextBtn = document.querySelector("#next-btn")
let question = document.getElementById("question")
let allOption = document.getElementsByClassName('alloption')
let queNumber = -1;
let options;
let countOfCorrect = 0;

function displayQue(queNumber) {
    question.style.visibility = "visible";
    nextBtn.style.visibility = "visible";
    playAgain.style.visibility = "hidden";
    allOption[0].style.visibility = "visible";
    nextBtn.innerHTML = "NEXT";

    // Clear previous options
    allOption[0].innerHTML = '';
    if (queNumber < 4) {
        question.innerHTML = (queNumber + 1) + ". " + QuestionBank[queNumber].Que;
        const div = document.createElement("div");
        allOption[0].appendChild(div);
        div.classList.add("alloption");
        QuestionBank[queNumber].Ans.forEach((answer) => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("options");
            div.appendChild(button)
            button.addEventListener('click', function () {
                if (!optionclicked) {
                    checkAns(button, queNumber);
                    optionclicked = true;
                }
            });
        });
        options = document.querySelectorAll('.options')
    }
    else {
        // alert("Questions are over.")
        displayresult();
    }
}
let optionclicked = true;

nextBtn.addEventListener('click', function () {
    if (optionclicked === false) {
        alert("Please Select a option.")
    }
    else {
        queNumber++;
        optionclicked = false
        displayQue(queNumber);
    }
})


function checkAns(option, queNumber) {
    const optionIndex = Array.from(options).indexOf(option);
    if (QuestionBank[queNumber].Ans[optionIndex].correct) {
        correctAns(option)
        countOfCorrect++;
    }
    else {
        wrongAns(option)
    }
}

function wrongAns(option) {
    options.forEach((option) => {
        option.style.backgroundColor = '';
    });
    console.log("Wrong Ans");
    option.style.backgroundColor = "#f69f9f";

}

function correctAns(option) {
    options.forEach((option) => {
        option.style.backgroundColor = '';
    });
    console.log("Correct Ans");
    option.style.backgroundColor = "#a1ef8b";
}

let playAgain = document.querySelector(".AgainPlay")

function displayresult() {
    question.innerHTML = "Your Score is " + countOfCorrect;
    question.style.textAlign = "center";
    nextBtn.style.visibility = "hidden";
    playAgain.style.visibility = "visible";
}

playAgain.addEventListener('click', function () {
    // alert("Hii")
    countOfCorrect = 0;
    queNumber = -1;
    queNumber++;
    optionclicked = false
    question.style.textAlign = "left";
    displayQue(queNumber);
})

