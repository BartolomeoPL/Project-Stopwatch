var timer = document.getElementById("timer");

var toggleButton = document.getElementById("toggle");

var resetButton = document.getElementById("reset");

var watch = new Stopwatch(timer);



toggleButton.addEventListener("click", function () {
    if (watch.isOn) {
        watch.stop();
        toggleButton.textContent = "Start";
    } else {
        watch.start();
        toggleButton.textContent = "Stop";
    }

});


resetButton.addEventListener("click", function () {
    watch.reset();
});