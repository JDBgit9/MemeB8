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

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
  
  myPromise
    .then(handleResolvedA, handleRejectedA)
    .then(handleResolvedB, handleRejectedB)
    .then(handleResolvedC, handleRejectedC);

    /* MediaStreamTrack*/
    const enabledFlag = track.enabled
track.enabled = [true | false]

/*adding a click eventfor pause button */
pauseButton.onclick = function(evt) {
    const newState = !myAudioTrack.enabled;
  
    pauseButton.innerHTML = newState ? "&#x25B6;&#xFE0F;" : "&#x23F8;&#xFE0F;";
    myAudioTrack.enabled = newState;
  }
  /* adding an even listener add traclt list*/
  addEventListener('addtrack', event => { })

onaddtrack = event => { }

/* using the event listener */
const videoElement = document.querySelector('video');

videoElement.videoTracks.addEventListener('addtrack', (event) => {
  console.log(`Video track: ${event.track.label} added`);
});


  


  

  
  




