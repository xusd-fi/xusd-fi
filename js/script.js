document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('bg-video');
        if(video.playing) {
        } else {
            video.play();
        }
    }
});