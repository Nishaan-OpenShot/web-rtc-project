
//checks if browser supports WebRTC
function hasUserMedia() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    return !!navigator.getUserMedia;
}

if(hasUserMedia()) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    //get both video and autdio streams from user's camera
    navigator.getUserMedia({video: true,audio: true},function(stream) {
var video =document.querySelector('video');

//insert stream into the video tag
video.sr = window.URL.createObjectURL(stream);
    },function(err) {});
} else {
    alert('Error. WebRTC is not supported!');
}