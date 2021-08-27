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
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FormContext } from './ShotFormContext'
import { createPost } from '../../providers/PostsProvider'

export default function TagsModal() {
  const { isModalOpen, setModalOpen, data, setData } =
    React.useContext(FormContext)
  const inputRef = React.useRef()

  const navigate = useNavigate()

  function handleSubmit() {
    setData({ ...data, tags: inputRef.current.value })
    console.log(data)

    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('tags', data.tags)
    formData.append('media', data.files)

    console.log(data)
    createPost(data)
      .then(() => {
        navigate('/')
      })
      .catch(console.error)
  }
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setModalOpen(!isModalOpen)}
      size="2xl"
    >
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
            ref={inputRef}
          />
          <Flex justify="space-between">
            <Button
              onClick={() => {
                setModalOpen(!isModalOpen)
              }}
            >
              Close
            </Button>
            <Flex gridColumnGap="8px">
              <Button disabled>Save as a draft</Button>
              <Button onClick={handleSubmit} colorScheme="pink">
                Publish now
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
