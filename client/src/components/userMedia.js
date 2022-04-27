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



