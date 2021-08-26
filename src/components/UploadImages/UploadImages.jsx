import React from 'react'

import ActionButtons from './ActionButtons'
import ImagePicker from './ImagePicker/ImagePicker'
import { useNavigate } from 'react-router-dom'
import ky from 'ky'
import { AppContext } from '../../AppContextProvider.js'
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'

export default function UploadImages() {
  const navigate = useNavigate()
  const { api } = React.useContext(AppContext)
  const [isOpen, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <form
        onSubmit={e => {
          handleSubmit(e, api.url, api.token)
            .then(navigate(-1))
            .catch(console.error)
        }}
      >
        <ActionButtons openModal={setOpen} />
        <ImagePicker />
        <TagsModal isOpen={isOpen} onClose={setOpen} />
      </form>
    </React.Fragment>
  )
}

const TagsModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={() => onClose(!isOpen)} size="2xl">
    <ModalOverlay />
    <ModalContent borderRadius="20px">
      <ModalHeader px="44px" pt="44px">
        Final touches
      </ModalHeader>
      <ModalBody px="44px" pt="14px" pb="44px">
        <Text mb="12px">Tags</Text>
        <Input
          colorScheme="pink"
          bg="#efefef"
          border="none"
          mb="24px"
          placeholder="Add tags..."
          className="tagsInput"
        />
        <Flex justify="space-between">
          <Button onClick={() => onClose(!isOpen)}>Close</Button>
          <Flex gridColumnGap="8px">
            <Button disabled>Save as a draft</Button>
            <Button type="submit" colorScheme="pink">
              Publish now
            </Button>
          </Flex>
        </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
)

function handleSubmit(event, url, token, openModalCallback) {
  event.preventDefault()

  const inputImages = event.target.querySelector(`.inputImages`)
  const tags = event.target.querySelector('.tagsInput')
  const title = event.target.querySelector('.inputTitle')
  const description = event.target.querySelector('.inputDescription')

  console.log(inputImages.files, tags.value, title.value, description.value)
  // const formData = new FormData()
  // formData.append('media', inputImages.files)
  // console.log(inputImages.files)
  // return ky
  //   .post(`${url}/uploads/new`, {
  //     body: formData,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .json()
}
