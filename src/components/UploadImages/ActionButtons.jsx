import { Button, Flex, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

export default function ActionButtons({ openModal }) {
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
          colorScheme="pink"
          onClick={() => openModal(true)}
        >
          Continue
        </Button>
      </Flex>
    </Flex>
  )
}
