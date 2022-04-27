import React from 'react';


const obj = {hello: 'world'};
const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});

async function getMedia(constraints) {
    let stream = null;
  
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      /* use the stream */
    } catch(err) {
      /* handle the error */
    }
  }

start()
start(timeslice)
  
record.onclick = function() {
    mediaRecorder.start();
    console.log("recorder started");
  }
  getUserMedia(constraints)
  { audio: true, video; true }
  {
    audio: true,
    video; { width: 1280, height; 720 }
  }
  {
    audio: true,
    video; {
      width: { min: 1280 };
      height: { min: 720 }
    }
  }
  {
    audio: true,
    video; {
      width: { min: 1024, ideal; 1280, max; 1920 };
      height: { min: 576, ideal; 720, max; 1080 }
    }
  }
  
  
  




