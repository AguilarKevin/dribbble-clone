import { Avatar, Button, Flex, Image, Wrap } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import bagSvg from '../../assets/bag.svg'
import NavSearchInput from './NavSearchInput'

export default function NavActions() {
  return (
    <Flex align="center">
      <NavSearchInput />
      <Wrap marginInlineEnd="5" shouldWrapChildren="false" align="center">
        <Image src={bagSvg} width="34px" />
      </Wrap>

      <Avatar
        marginInlineEnd="4"
        name="Ryan Florence"
        src="https://bit.ly/ryan-florence"
        size="sm"
      />

      <Link to="/uploads/new">
        <Button
          borderRadius={8}
          fontSize={12}
          paddingBlock="0px"
          paddingInline="4"
          color="white"
          bg="pink.400"
          colorScheme="pink"
        >
          Upload
        </Button>
      </Link>
    </Flex>
  )
}
