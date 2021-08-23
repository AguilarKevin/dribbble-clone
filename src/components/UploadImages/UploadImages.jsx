import React from 'react'

import ActionButtons from './ActionButtons'
import ImagePicker from './ImagePicker/ImagePicker'
import { useNavigate } from 'react-router-dom'
import ky from 'ky'

export default function UploadImages() {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <form
        onSubmit={e => {
          handleSubmit(e).then(navigate('/')).catch(console.error)
        }}
      >
        <ActionButtons />
        <ImagePicker />
      </form>
    </React.Fragment>
  )
}

function handleSubmit(event) {
  event.preventDefault()

  const inputImages = event.target.querySelector(`.inputImages`)

  const formData = new FormData()
  formData.append('image', inputImages.files[0])
  console.log(inputImages.files[0])
  return ky
    .post('http://127.0.0.1:8000/api/uploads/new', {
      body: formData,
      headers: {
        Authorization: 'Bearer H93gMy7rFtkecUpFBRLSgtKEPD1llrS83GHuW1yP',
      },
    })
    .json()
}
