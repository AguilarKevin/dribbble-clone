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

import { FormContext } from './ShotFormContext'

export default function TagsModal({ isOpen, onClose }) {
  const {
    isModalOpen,
    setModalOpen,
    inputTitleRef,
    inputDescRef,
    data,
    setData,
    handleSubmit,
  } = React.useContext(FormContext)

  const inputRef = React.useRef(null)
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
              <Button
                onClick={() => {
                  setData({
                    title: inputTitleRef.current.value,
                    description: inputDescRef.current.value,
                    tags: inputRef.current.value,
                    ...data,
                  })
                  handleSubmit(data)
                  setModalOpen(!isModalOpen)
                }}
                colorScheme="pink"
              >
                Publish now
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
