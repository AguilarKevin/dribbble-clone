import { Flex } from '@chakra-ui/layout'
import { Show } from '@chakra-ui/media-query'
import React from 'react'

import LeftBanner from './components/LeftBanner'
import SignInForm from './components/SignInForm'

export default function SignIn() {
  return (
    <Flex align="start" w="full" flexDir={{ base: 'column', md: 'row' }}>
      <Show above="md">
        <LeftBanner />
      </Show>
      <SignInForm />
    </Flex>
  )
}
