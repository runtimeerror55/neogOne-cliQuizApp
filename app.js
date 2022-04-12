let readline = require("readline-sync")




function showFinalScore(score) {
        console.log(`your final score: ${score}/5\n`)
}

function checkUserAnswer(actualAnswer, userAnswer) {
        if (userAnswer.toLowerCase() == actualAnswer.toLowerCase()) {
                console.log("Hurray! you got that right")
                return 1;


        }
        else {
                console.log("oops thats wrong")
                return 0;
        }
}



function gamePlay() {

        let score = 0;

        for (i of questions) {

                let userAnswer = readline.question(i["question"] + "\n")
                score += checkUserAnswer(i["answer"], userAnswer)
                console.log(`current score: ${score}\n`)


        }
        showFinalScore(score);
}


function welcome() {
        let userName = readline.question("what is your name" + "\n")
        console.log(`welcom ${userName} to DO YOU KNOW AAKASH \n`);

}


let questions = [
        {
                question: "what is my favourite color",
                answer: "matte black"
        },
        {
                question: "who is my favourite tennis player",
                answer: "roger federer"
        },
        {
                question: "what is my favourite tv series",
                answer: "friends"
        },
        {
                question: "who is my favourite cricketer",
                answer: "steve smith"
        },
        {
                question: "where do i live",
                answer: "hyderabad"
        }
]


welcome()
gamePlay()
