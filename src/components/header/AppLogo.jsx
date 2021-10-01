import { Image } from '@chakra-ui/image'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import Logo from '../../assets/logo.svg'

export default function AppLogo() {
  return (
    <Flex ml="8" align="center" justify="center">
      <Image src={Logo} alt="dribble logo" />
    </Flex>
  )
}
