import React from 'react'

import ActionButtons from './ActionButtons'
import TagsModal from './TagsModal'
import ImagePicker from './ImagePicker/ImagePicker'
import ky from 'ky'

import { FormContext } from './ShotFormContext.js'
import ShotForm from './ShotForm'
import Thumbs from './Thumbs'
export default function UploadImages() {
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [data, setData] = React.useState({})
  const inputTitleRef = React.useRef(null)
  const inputDescRef = React.useRef(null)

  return (
    <React.Fragment>
      <FormContext.Provider
        value={{
          setModalOpen,
          isModalOpen,
          inputTitleRef,
          inputDescRef,
          data,
          setData,
          handleSubmit,
        }}
      >
        <ActionButtons />
        {!data.files && <ImagePicker />}
        {console.log(data)}
        {data.files?.length > 0 && (
          <ShotForm>
            <Thumbs />
          </ShotForm>
        )}
        <TagsModal />
      </FormContext.Provider>
    </React.Fragment>
  )
}

function handleSubmit(data) {
  console.log(data)
  const formData = new FormData()
  formData.append('media', data.files)
}
