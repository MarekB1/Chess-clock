// Import time spans
var min = $("minutes-one"),
    sec = $("seconds-one");

// Import Buttons
    var playerOne = $("#player-one"),
        playerTwo = $("#player-two"),
        pause = $(".pause"),
        resume = $(".resume"),
        reset = $(".reset");

// Controls
var isPaused = false; // základná hodnota

// Make timer
var time  = 300, // čas v sekundách
    timer = setInterval(() => {
        if(!isPaused && time >= 0) {
            // set minutes
            min.innerHTML = parseInt(time / 60, 10);
            // set seconds
            sec.innerHTML = parseInt(time % 60, 10);

            time--;
        }
    }, 1000);

    // Click event to the buttons
pause.on('click', function(event) {
    console.log('pauza');
    event.preventDefault();
    isPaused = true;
});

resume.on('click', function(event) {
    console.log('resume');
    event.preventDefault();
    isPaused = false;
});

reset.on('click', function(event) {
    console.log('reset');
    event.preventDefault();
    time = 300;
});