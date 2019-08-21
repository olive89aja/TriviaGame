let scorePlayer = 0;
// let questionIndex = 0;
// let answer = 0;
// let a1= 0;
// let a2 = 0;
// let a3 = 0;



//Not sure if a1 a2 a3 is going to work for answers. 
const triviaQuestions = 
["In Baseball, who won the 2016 World Series ?",
"In golf, who won the 2019 Masters ? ",
"Who won the 2019 Tour de France ?",
"How many times have the Yankees won the World Series ?",
"Which Formula 1 pilot won the most world championships ?",
"When was the last time the Bears won the Superbowl ?",
"How many times did Rafael Nadal win the French Open ?",
"Out of these three legends, who won the most Grand slams ?"];

const triviaAnswers = 
[["Cubs", "Indians", "Yankees"], ["Billy Horschel", "Tiger Woods", "Brooks Koepka"], 
["Lance Armstrong", "Egan Bernal", "Geraint Thomas"], ["20", "31", "27"], 
["Michael Schumacher", "Alain Prost", "Sebastian Vettel"], ["1996", "2007", "1986"],
["8", "10", "12"], ["Federer", "Agassi", "Sampras"] ]


const triviaCorrectanswers =
["Cubs", "Tiger Woods", "Egan Bernal", "27 times", "Michael Schumacher", "1986", "12", "Federer"]

function askQuestion () {
   

    for (let questionIndex = 0; questionIndex < 8; questionIndex++) {
        
        var question = $("<h4>");
   
        question.attr("sportsquestion", triviaQuestions[questionIndex]);
    
        
        $("#questions").append(question);
        
       question.html(triviaQuestions[questionIndex]);
    }
    
    
}

function possibleAnswers () {

    
    for (let answersIndex = 0; answersIndex < 8; answersIndex++) {
        
        var answerx = $("<p>");
   
        answerx.attr("sportsanswers", triviaAnswers[answersIndex]);
    
        
        $("#answers").append(answerx);
        
       answerx.html(triviaAnswers[answersIndex]);
       
    }
}







askQuestion();
possibleAnswers();
$("p").after($(".sportsquestions"));

// function contestantScore () {
// document.querySelector ("#score").innerHTML = "Correct answers :"+score;
// }
// contestantScore();

// $("#radio").on("click",function() {

//     userGuess = $(this).text;

// if (userGuess = triviaCorrectanswers) {
//     score++;
//     contestantScore();
// }

// askQuestion();

// })