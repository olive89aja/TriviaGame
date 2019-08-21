let scorePlayer = 0;
let questionIndex = 0;





//Not sure if a1 a2 a3 is going to work for answers. 
const triviaQuestions = 
["In Baseball, who won the 2016 World Series ?",["Cubs"], ["Indians"], ["Yankees"],
"In golf, who won the 2019 Masters ? ",["Billy Horschel"], ["Tiger Woods"], ["Brooks Koepka"],
"Who won the 2019 Tour de France ?",["Lance Armstrong"], ["Egan Bernal"], ["Geraint Thomas"],
"How many times have the Yankees won the World Series ?",["20"], ["31"], ["27"],
"Which Formula 1 pilot won the most world championships ?",["Michael Schumacher"], ["Alain Prost"], ["Sebastian Vettel"],
"When was the last time the Bears won the Superbowl ?",["1996"], ["2007"], ["1986"],
"How many times did Rafael Nadal win the French Open ?",["8"], ["10"], ["12"],
"Out of these three legends, who won the most Grand slams ?",["Federer"], ["Agassi"], ["Sampras"]];


const triviaAnswers =
["Cubs", "Tiger Woods", "Egan Bernal", "27 times", "Michael Schumacher", "1986", "12", "Federer"]

function askQuestion () {
   

    for (let questionIndex = 0; questionIndex < 32; questionIndex++) {
        
        var question = $("<p>");
   
        question.attr("sportsquestion", triviaQuestions[questionIndex]);
    

        $("#questions").append(question);
        
       question.html(triviaQuestions[questionIndex]);
    }
    
    
}





askQuestion();

$( "p" ).click(function() {
    //$( this ).slideToggle();
    userGuess = $(this).text();
    console.log(userGuess);
    if(userGuess = triviaAnswers[0])
    {
        scorePlayer+1
}
console.log(scorePlayer);
});

  //$(".sportsanswers").after($(".sportsquestions"));
// $(".sportsanswers").append($(".sportsquestions"));
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