import React from 'react'

import ActionButtons from './ActionButtons'
import TagsModal from './TagsModal'
import ImagePicker from './ImagePicker/ImagePicker'

import { FormContext } from './ShotFormContext.js'
import ShotForm from './ShotForm'
import Thumbs from './Thumbs'
export default function UploadImages() {
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [data, setData] = React.useState({ tags: '' })
  const inputTitleRef = React.useRef(null)
  const inputDescRef = React.useRef(null)
  const continueBtnRef = React.useRef(null)

  return (
    <React.Fragment>
      <FormContext.Provider
        value={{
          setModalOpen,
          isModalOpen,
          inputTitleRef,
          inputDescRef,
          continueBtnRef,
          data,
          setData,
        }}
      >
        <ActionButtons />
        {setEnableContinueBtn(continueBtnRef.current, data.files)}
        {!data.files && <ImagePicker />}
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

function setEnableContinueBtn(btn, condition) {
  if (btn) {
    btn.disabled = !condition
  }
}
