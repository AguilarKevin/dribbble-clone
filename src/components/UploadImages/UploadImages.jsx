import React from 'react';

import ActionButtons from './ActionButtons';
import ImagePicker from './ImagePicker/ImagePicker';

export default function UploadImages() {
  return (
    <React.Fragment>
      <ActionButtons />
      <ImagePicker />
    </React.Fragment>
  );
}
