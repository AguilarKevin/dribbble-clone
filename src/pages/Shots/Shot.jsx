import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Shot() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Modal
      size="full"
      isOpen={true}
      onClose={() => {
        navigate(-1)
      }}
    >
      <ModalOverlay bg="#00000020" />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody bg="#00000020">
          {location.pathname.replace('/shots/', '')}
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              navigate(-1)
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
