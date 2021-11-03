import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { Hide, Show } from '@chakra-ui/media-query'

import AppLogo from './AppLogo'
import MobileNavigation from './MobileNavigation/MobileNavigation'
import Navigation from './Navigation'
import UserActionButtons from './UserActionButtons'
import { UserContext } from '../../UserContextProvider'
import { useGoogleLogin } from 'react-google-login'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

export default function Header() {
  const [user, setUser] = useState(null)

  const { loaded } = useGoogleLogin({
    onSuccess: userData => {
      setUser({
        avatar: userData.profileObj.imageUrl,
        name: userData.profileObj.name,
      })
    },
    onFailure: res => console.log(res),
    clientId,
    accessType: 'online',
    // autoLoad: true,
    isSignedIn: true,
  })

  if (loaded) {
    console.log(user)
  }
  return (
    <UserContext.Provider value={{ user }}>
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
    </UserContext.Provider>
  )
}
