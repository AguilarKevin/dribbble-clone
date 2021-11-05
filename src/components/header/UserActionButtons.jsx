import { Button, IconButton } from '@chakra-ui/button'
import { Box, Flex } from '@chakra-ui/layout'

import { Show } from '@chakra-ui/media-query'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContextProvider'
import BagIcon from '../../assets/bag.svg'
import { Image } from '@chakra-ui/image'

export default function UserActionButtons() {
  const navigate = useNavigate()

  const context = useContext(UserContext)

  if (context.user) {
    return (
      <Button p="2" variant="ghost">
        <Image w="18px" h="18px" src={BagIcon} />
      </Button>
    )
  }
  return (
    <Flex flex={{ base: '0', md: '1' }} justify="end" align="center">
      <Button
        size="lg"
        fontWeight="regular"
        fontSize="md"
        color="#8E8E97"
        variant="ghost"
        onClick={() => {
          navigate('/session/new')
        }}
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
