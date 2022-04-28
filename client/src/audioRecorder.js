import MicRecorder from 'mic-recorder-to-mp3';


/* configuring microphone */
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

/*checking browser for permissions */
this.state = {
    isRecording: false,
    blobURL: '',
    isBlocked: false,
  }
/* checking if permission for microphone is allowed in browser */
navigator.getUserMedia({ audio: true },
    () => {
      console.log('Permission Granted');
      this.setState({ isBlocked: false });
    },
    () => {
      console.log('Permission Denied');
      this.setState({ isBlocked: true })
    },
  );
  /* Recording Audio */
  <>
  <button onClick={this.start} disabled={this.state.isRecording}>
Record</button>
<button onClick={this.stop} disabled={!this.state.isRecording}>
  Stop
</button>
<audio src={this.state.blobURL} controls="controls" />
</>
/* Start recorder function */
start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };
/*stop recording function*/
  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };




export default AudioRecorder;