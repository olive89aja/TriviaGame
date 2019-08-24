
//Initial declaration for scorePlayer
let scorePlayer = 0;



//Our Arrays hold questions, choices and correct answers
const triviaQuest = 
{questions: {q1:"In Baseball, who won the 2016 World Series ?", 
q2:"In golf, who won the 2019 Masters ? ",
q3:"Who won the 2019 Tour de France ?",
q4:"How many times have the Yankees won the World Series ?",
q5:"Which Formula 1 pilot won the most world championships ?",
q6:"When was the last time the Bears won the Superbowl ?",
q7:"How many times did Rafael Nadal win the French Open ?",
q8:"Out of these three legends, who won the most Grand slams ?"}}


const triviaAnswers = {a1:["Cubs","Indians", "Yankees"],a2:["Billy Horschel", "Tiger Woods", "Brooks Koepka"],a3:["Lance Armstrong", "Egan Bernal", "Geraint Thomas"],a4:["20", "31", "27"],a5:["Michael Schumacher", "Alain Prost", "Sebastian Vettel"],a6:["1996", "2007", "1986"],a7:["8", "10", "12"],a8:["Roger Federer", "Andre Agassi", "Pete Sampras"]}  

const correctAnswers =
["Cubs", "Tiger Woods", "Egan Bernal", "27", "Michael Schumacher", "1986", "12", "Roger Federer"]

//This on click function allows us to make instructions go away

$("#instructions").click(function() {
  $("#instructions").fadeOut();  
  });  
  //We change the color of the text and create a pointer 
  $("#instructions").css("color","green");
  $("#instructions").css("cursor","pointer");

//this function displays questions and choices. This code is too wet
//So far my attempts to make it better via a loop or forEach have failed
function askQuestions() {


$(".questions1").html(triviaQuest.questions.q1);
$(".sportsanswers1").html(triviaAnswers.a1[0]);
$(".sportsanswersa").html(triviaAnswers.a1[1]);
$(".sportsanswersb").html(triviaAnswers.a1[2]);
$(".questions2").html(triviaQuest.questions.q2);
$(".sportsanswers2").html(triviaAnswers.a2[0]);
$(".sportsanswersc").html(triviaAnswers.a2[1]);
$(".sportsanswersd").html(triviaAnswers.a2[2]);
$(".questions3").html(triviaQuest.questions.q3);
$(".sportsanswers3").html(triviaAnswers.a3[0]);
$(".sportsanswerse").html(triviaAnswers.a3[1]);
$(".sportsanswersf").html(triviaAnswers.a3[2]);
$(".questions4").html(triviaQuest.questions.q4);
$(".sportsanswers4").html(triviaAnswers.a4[0]);
$(".sportsanswersg").html(triviaAnswers.a4[1]);
$(".sportsanswersh").html(triviaAnswers.a4[2]);
$(".questions5").html(triviaQuest.questions.q5);
$(".sportsanswers5").html(triviaAnswers.a5[0]);
$(".sportsanswersi").html(triviaAnswers.a5[1]);
$(".sportsanswersj").html(triviaAnswers.a5[2]);
$(".questions6").html(triviaQuest.questions.q6);
$(".sportsanswers6").html(triviaAnswers.a6[0]);
$(".sportsanswersk").html(triviaAnswers.a6[1]);
$(".sportsanswersl").html(triviaAnswers.a6[2]);
$(".questions7").html(triviaQuest.questions.q7);
$(".sportsanswers7").html(triviaAnswers.a7[0]);
$(".sportsanswersm").html(triviaAnswers.a7[1]);
$(".sportsanswersn").html(triviaAnswers.a7[2]);
$(".questions8").html(triviaQuest.questions.q8);
$(".sportsanswers8").html(triviaAnswers.a8[0]);
$(".sportsanswerso").html(triviaAnswers.a8[1]);
$(".sportsanswersp").html(triviaAnswers.a8[2]);

  }

  askQuestions();
  //This line ensures that after 60 seconds, the game stops
  setTimeout(function(){ alert("Time is up ! Hit F5 to play again"); }, 90000);

  //Function to click on p elements, register user choices and increment score

$("p").click(function() {
    $( this ).slideToggle();
    userGuess = $(this).text();
    console.log(userGuess);
    console.log(correctAnswers.indexOf(userGuess));

    //When a clicked element is not in the correct answers array, the score stays the same. When 
    // a clicked element is is the correct answers array, the score is incremented.

    if (correctAnswers.indexOf(userGuess) === -1)
    {
        scorePlayer;
        
} 

else {
    scorePlayer++;
}

console.log(scorePlayer);

$(".score").html("Your score is: " + scorePlayer)

//special instructions for a perfect score
if (scorePlayer === 8) 
{
$(".score").html("YOU ARE OUR SUPER CHAMPION ! 8 good answers ! Well done!")
}
});




