

$(document).ready(function() {
// when the page is loaded first

    $('#countdown').hide();
    $('.trivia-ques').hide();
    $('.results').hide();

    // Declare Variables
    var number = 90; //number of seconds
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;

//FUNCTIONS

    // function to show questions
    function showQuestions(){
        $('#countdown').show();
        $('.trivia-ques').show();
        $('#game-done').show();
    }

    // timer
    function countdownTimer(){
            intervalId = setInterval(decrement, 1000);
    }
   
        // function to decrement timer
    function decrement(){
        number--;
        $('#timer').html(" " + number + " " + "seconds");
        if (number ===1){
            $('#timer').html(" " + number + " " + "second");
        }
        else if(number ===0) {
            stop();
            hide();
            displaySummary();
        }
    }

        //function to clear timer
    function stop() {
        clearInterval(intervalId);
    }

        //function to hide text after questions are answered or timer out
    function hide(){
        $('#countdown').hide();
        $('.trivia-ques').hide();
        $('#game-done').hide();
    }

    // function to display summary of game
    function displaySummary(){
        $('.results').show();
        unanswered = (8-(correctCount+wrongCount));
        $('#correctScore').text("Right:" + " " + correctCount); 
        $('#wrongScore').text("Wrong:" + " " + wrongCount); 
        $('#unanswered').text("You didn't even try:" + " " + unanswered); 
    }

// CLICK EVENTS

    //Clicking Start Button
    $('#game-start').on('click', function(){
        $('#game-start').hide();
        showQuestions();
        countdownTimer();
    }); 

    //Clicking Done Button
    $('#game-done').on('click', function(){
        $('#game-start').hide(); 
        hide();
        displaySummary();
    });

    //Clicking Radio button
    $('input[type=radio]').on ('change', function(){
    correctCount = $('input[value=correct]:checked').length;
    wrongCount = $('input[value=wrong]:checked').length;
    unanswered = (8-(correctCount+wrongCount));
    });

// Last closing bracket
});