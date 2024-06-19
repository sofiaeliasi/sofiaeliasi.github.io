document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("button[id^='button']");
    var audios = document.querySelectorAll("audio[id^='myAudio']");

    function playAudio(audioId) {
        // Pause all other audio elements
        audios.forEach(function(audio) {
            if (!audio.paused) {
                audio.pause();
            }
        });

        var audioToPlay = document.getElementById(audioId);

        if (audioToPlay.paused) {
            audioToPlay.play();
        } else {
            audioToPlay.pause();
        }
    }

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var audioId = button.getAttribute("data-audio-id");
            playAudio(audioId);
        });
    });
});
