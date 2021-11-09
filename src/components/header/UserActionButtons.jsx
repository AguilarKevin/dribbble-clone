import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'

import { Show } from '@chakra-ui/media-query'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContextProvider'
import BagIcon from '../../assets/bag.svg'
import { Image } from '@chakra-ui/image'
import { Avatar, InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function UserActionButtons() {
  const navigate = useNavigate()

  const context = useContext(UserContext)

  if (context.user) {
    return (
      <Flex gridGap="4" paddingInlineEnd={{ md: '2' }}>
        <Show above="md">
          <InputGroup
            maxWidth="160px"
            bg="gray.200"
            borderRadius="8"
            overflow="hidden"
          >
            <InputLeftElement children={<SearchIcon />} />
            <Input placeholder="search" />
          </InputGroup>
        </Show>
        <Button p="0" variant="ghost">
          <Image w="18px" h="18px" src={BagIcon} />
        </Button>
        <Show above="md">
          <Avatar
            width="40px"
            height="40px"
            src={context.user.avatar}
            name={context.user.name}
          />
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
            Upload
          </Button>
        </Show>
      </Flex>
    )
  }
  return (
    <Flex
      flex={{ base: '0', md: '1' }}
      justify="end"
      align="center"
      paddingInlineEnd={{ md: '2' }}
    >
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
