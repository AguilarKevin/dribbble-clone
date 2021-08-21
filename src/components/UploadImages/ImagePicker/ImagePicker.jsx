import React from 'react';
import ImagePickerHeader from './ImagePickerHeader';
import Dropzone from './Dropzone';

export default function ImagePicker() {
  return (
    <center>
      <ImagePickerHeader />
      <Dropzone />
    </center>
  );
}
