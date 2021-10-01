import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'

import { Show } from '@chakra-ui/media-query'
import React from 'react'

export default function UserActionButtons() {
  return (
    <Flex flex={{ base: '0', md: '1' }} justify="end" align="center">
      <Button
        size="lg"
        fontWeight="regular"
        fontSize="md"
        color="#8E8E97"
        variant="ghost"
      >
        Sign in
      </Button>
      <Show above="md">
        <Button
          borderRadius={8}
          fontSize={14}
          paddingBlock="0px"
          paddingInline="4"
          mr="8"
          color="white"
          bg="pink.500"
          colorScheme="pink"
        >
          Sign up
        </Button>
      </Show>
    </Flex>
  )
}
