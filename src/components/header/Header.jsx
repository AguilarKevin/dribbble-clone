import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Hide, Show } from '@chakra-ui/media-query'

import AppLogo from './AppLogo'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import UserActionButtons from './UserActionButtons'

const navlinks = [
  'Inspiration',
  'Find Work',
  'Learn Design',
  'Go Pro',
  'Hire Designers',
]

export default function Header() {
  return (
    <Flex
      h={{ base: '60px', md: '80px' }}
      justify={{ base: 'space-between', md: 'start' }}
      align="center"
      position="sticky"
      bg="white"
      zIndex="10"
      top="0"
      paddingInline={{ base: '2', md: '0' }}
      borderBottomWidth="1px"
      borderBottom="gray.100"
    >
      <Hide above="md">
        <MobileNavigation links={navlinks} />
      </Hide>
      <AppLogo />
      <Show above="md">
        <Navigation links={navlinks} />
      </Show>
      <UserActionButtons />
    </Flex>
  )
}
