let scorePlayer = 0;
let questionIndex = 0;


//Not sure if a1 a2 a3 is going to work for answers. 
const triviaQuestions = 
[{q : "In Baseball, who won the 2016 World Series ?", a1 : "Cubs", a2 : "Indians", a3 : "Yankees", answer : a1},
{q : "In golf, who won the 2019 Masters ? ", a1 : "Billy Horschel", a2 : "Tiger Woods", a3 :"Brooks Koepka", answer : a2},
{q :"Who won the 2019 Tour de France ?", a1 : "Lance Armstrong", a2 : "Egan Bernal", a3 : "Geraint Thomas", answer : a2},
{q : "How many times have the Yankees won the World Series ?", a1 : "20", a2 : "31", a3 : "27", answer : a3},
{q : "Which Formula 1 pilot won the most world championships ?", a1 : "Michael Schumacher", a2 : "Alain Prost", a3 : "Sebastian Vettel", answer : a1},
{q : "When was the last time the Bears won the Superbowl ?", a1 : "1996", a2 : "2007", a3 : "1986", answer : a3},
{q : "How many times did Rafael Nadal win the French Open ?", a1 : "8", a2 : "10", a3 : "12", answer : a3},
{q : "Out of these two legends, who won the most Grand slams ?", a1 : "Sampras", a2 : "Agassi", answer : a1}];


function askQuestion () {
    if (questionIndex <= (questions.length-1)) {
        document.querySelector("#question").innerHTML = questions[questionIndex].q;
    }

    else {
        document.querySelector ("#score").innerHTML = (`you tried to answer to 8 questions and`& `your final score is`+score);
    }
}


function contestantScore () {
document.querySelector ("#score").innerHTML = "Correct answers :"+score;
}


askQuestion();
contestantScore();

$(".radio").on("click",function() {

    userGuess = click;

if (userGuess = answer) {
    score++;
    contestantScore();
}

askQuestion();

})