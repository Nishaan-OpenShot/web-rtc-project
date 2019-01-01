
// 'use strict';

// const express = require("express");
// const http = require('http');
// const socketio = require('socket.io');

// class Server {

//     constructor(){
//         this.app = express();
//         this.http = http.Server(this.app);
//         this.socket = socketio(this.http);
//     }

//     appExecute(){
//         console.log('Test running');
//         const port =  4400;
//         const host = `localhost`;      

//         this.http.listen(port, host, () => {
//             console.log(`Listening on http://${host}:${port}`);
//         });
//     }

// }

// const app = new Server();
// app.appExecute();



function hasUserMedia() {
    //checks if browser supports WebRTC
    navigator.getUserMedia = navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    return !!navigator.getUserMedia;
}

if(hasUserMedia()) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    //get both video and autdio streams from user's camera
    navigator.getUserMedia({video: true,audio: true},function(stream) {
    var video = document.querySelector('video');

    //insert stream into the video tag
    video.sr = window.URL.createObjectURL(stream);
        },function(err) {});
} else {
    alert('Error. WebRTC is not supported!');
}