var userClickedPattern = [];
buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
correct = [];

$("body").keypress(function(event){
    if (event.key = "a"){
        nextSequence();
    }
  });

 
$(".btn").on("click", function(){
    
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
    
    var audio = new Audio("sounds/" + userChosenColour + ".mp3");
    audio.play();

    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel) {

  
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 600);
    }
  } 
  else {
 console.log("wrong");
 var audio = new Audio("sounds/wrong.mp3");
audio.play();
$("body").addClass("game-over")
setTimeout(
  function(){
      $("body").removeClass("game-over")
  },200
)
$("h1").text("Game Over")
startOver();


  }
}


var level = 0;
function nextSequence(){
    userClickedPattern =[];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColour);
    
}
function startOver(){
  gamePattern=[]
  $("h1").text("Game Over,Press A to Restart")
  level=0;

}

function animatePress(currentColor){

    $("#"+ currentColor).addClass("pressed")

    setTimeout(
        function(){
            $("#"+ currentColor).removeClass("pressed")
        },100
    )
}
  





