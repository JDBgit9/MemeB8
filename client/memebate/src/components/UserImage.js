import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'oj8fgd3v';
const CLOUDINARY_UPLOAD_URL = 'CLOUDINARY_URL=cloudinary://173575665852686:lO977TJ4gfnCUjdP84FcSztolJs@memebate';

export default class UserImage extends React.Component {
constructor(props) {
        super(props);
    
        this.state = {
          uploadedFileCloudinaryUrl: ''
        };
      }
      onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });
    
        this.handleImageUpload(files[0]);
      }
      handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
    
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });
          }
        });
      }
      render() {
        return (
          <form>
            <div className="FileUpload">
              <Dropzone
                onDrop={this.onImageDrop.bind(this)}
                multiple={false}
                accept="image/jpg, image/png">
                <div>Drop an image or click to select a file to upload.</div>
              </Dropzone>
            </div>
    
            <div>
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>
          </form>
        )
      }
    }


   