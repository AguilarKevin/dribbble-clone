import { Image } from '@chakra-ui/image'
import { Flex } from '@chakra-ui/layout'
import React from 'react'

import DribbbleLogo from '../../../assets/logo.svg'

export default function AppLogo() {
  return (
    <Flex align="center" justify="center">
      <Image width="90px" src={DribbbleLogo} alt="dribble logo" />
    </Flex>
  )
}
