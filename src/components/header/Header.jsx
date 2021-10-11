import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Hide, Show } from '@chakra-ui/media-query'

import AppLogo from './AppLogo'
import MobileNavigation from './MobileNavigation/MobileNavigation'
import Navigation from './Navigation'
import UserActionButtons from './UserActionButtons'

export default function Header() {
  return (
    <Flex
      h={{ base: '60px', md: '80px' }}
      justify={{ base: 'space-between', md: 'start' }}
      align="center"
      position={{ base: 'sticky', md: 'static' }}
      bg="white"
      zIndex="20"
      top="0"
      insetX="0"
      paddingInline={{ base: '2', md: '0' }}
      borderBottomWidth="1px"
      borderBottom="gray.100"
    >
      <Hide above="md">
        <MobileNavigation />
      </Hide>
      <AppLogo />
      <Show above="md">
        <Navigation />
      </Show>
      <UserActionButtons />
    </Flex>
  )
}
