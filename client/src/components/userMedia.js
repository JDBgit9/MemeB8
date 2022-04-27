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
/*adding constraints*/

  getUserMedia(constraints)

  /*adding consraints*/
  { audio: true, video; true }
  {
    audio: true,
    video; { width: 1280, height; 720 }
  }
  /*adding a min-max resolution function*/
  {
    audio: true,
    video; {
      width: { min: 1280 };
      height: { min: 720 }
    }
  }
  /* adding an overconstrained error function */
  {
    audio: true,
    video; {
      width: { min: 1024, ideal; 1280, max; 1920 };
      height: { min: 576, ideal; 720, max; 1080 }
    }
  }
  /* added an ideal value */
  {
    audio: true,
    video; {
      width: { ideal: 1280 };
      height: { ideal: 720 }
    }
  }
  /*mobile constaints front camera */
  { audio: true, video; { facingMode: "user" } }

  /* mobile constraints rear camera */
  { audio: true, video; { facingMode: { exact: "environment" } } }

/* adding a non-number constraint to request specific device*/
{ video: { deviceId: myPreferredCameraDeviceId } }

/*return camera requested or diff camera if no longer available */
{ video: { deviceId: { exact: myExactCameraOrBustDeviceId } } }

  
  




