// Imortovanie tlačítiek
    var playerOne = $("#player-one"),
        playerTwo = $("#player-two"),
        pause = $(".pause"),
        resume = $(".resume"),
        reset = $(".reset");


var isPaused = false; // základná hodnota pre pauzu do budúcna 

// Odpočítavanie hráč 2
function firstPlayerTimer() {
    console.log('Player jedna odpočítavanie');
    var timer2 = '5:00';
    var interval = setInterval(function() {
        
        var timer = timer2.split(':');
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        $('.time-one').html(minutes + ':' + seconds);

        if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
        timer2 = minutes + ':' + seconds;
    }, 1000);
};

// Odpočítavanie hráč 2
function secondPlayerTimer() {
    console.log('Player dva odpočítavanie');
    var timer2 = '5:00';
    var interval = setInterval(function() {
        
        var timer = timer2.split(':');
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        $('.time-two').html(minutes + ':' + seconds);

        if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
        timer2 = minutes + ':' + seconds;
    }, 1000);
};
/*
*   Ovládanie
*/
    // Hráč jeden
playerOne.on('click', function(event) {
    console.log('Hráč jedna');
    firstPlayerTimer();
    playerOne.addClass('start');
    playerOne.removeClass('stop');
    playerTwo.addClass('stop');
    playerTwo.removeClass('start');
    event.preventDefault();
});

    // Hráč dva
playerTwo.on('click', function(event) {
    console.log('Hráč dva');
    secondPlayerTimer();
    playerTwo.addClass('start');
    playerTwo.removeClass('stop');
    playerOne.addClass('stop');
    playerOne.removeClass('start');
    event.preventDefault();

});

    // Pauza
pause.on('click', function(event) {
    console.log('pauza');
    playerOne.addClass('overlay');
    playerTwo.addClass('overlay');
    pause.addClass('overlay');
    event.preventDefault();
    playerOne.prop('disabled', true);
});

    // Pokračovanie
resume.on('click', function(event) {
    console.log('resume');
    playerOne.removeClass('overlay');
    playerTwo.removeClass('overlay');
    pause.removeClass('overlay');
    event.preventDefault();
});

    // Resetovanie
reset.on('click', function(event) {
    console.log('reset');
    playerOne.removeClass('start stop');
    playerTwo.removeClass('start stop');
    playerOne.removeClass('overlay');
    playerTwo.removeClass('overlay');
    pause.removeClass('overlay');
    event.preventDefault();

});
