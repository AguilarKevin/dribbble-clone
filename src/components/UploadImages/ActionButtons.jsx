import { Button, Flex, Spacer, useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { FormContext } from './ShotFormContext'
import roundToNearestMinutes from 'date-fns/roundToNearestMinutes/index'

export default function ActionButtons() {
  const {
    continueBtnRef,
    setModalOpen,
    inputTitleRef,
    inputDescRef,
    data,
    setData,
  } = React.useContext(FormContext)
  const toast = useToast()
  const toastIdRef = React.useRef()

  function showErrorToast() {
    toast.closeAll()
    toastIdRef.current = toast({
      title: 'Empty title',
      description: 'The title is required',
      status: 'error',
    })
  }

  return (
    <Flex paddingInline="6" paddingBlockStart="6" position="sticky" top="0">
      <Link to="/shots">
        <Button variant="outline" fontSize="sm">
          Cancel
        </Button>
      </Link>

      <Spacer />
      <Flex>
        <Button
          marginInlineEnd="4"
          size="sm"
          paddingBlock="5"
          paddingInline="6"
          disabled
        >
          Save as draft
        </Button>
        <Button
          size="sm"
          paddingBlock="5"
          paddingInline="6"
          color="white"
          bg="pink.400"
          ref={continueBtnRef}
          onClick={() => {
            if (inputTitleRef.current.value.trim().length === 0) {
              showErrorToast()
              return
            }
            setData({
              ...data,
              title: inputTitleRef.current.value,
              description: inputDescRef.current.value,
            })
            toast.closeAll()
            setModalOpen(true)
          }}
        >
          Continue
        </Button>
      </Flex>
    </Flex>
  )
}
