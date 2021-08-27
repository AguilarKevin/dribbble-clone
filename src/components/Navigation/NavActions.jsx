import { Avatar, Button, Flex, Image, Wrap } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import bagSvg from '../../assets/bag.svg'
import NavSearchInput from './NavSearchInput'

import { useQuery } from 'react-query'
import { AppContext } from '../../AppContextProvider'
import { getUser } from '../../providers/UserProvider'

const avatar = user => (
  <Avatar marginInlineEnd="4" name={user?.name} src={user?.avatar} size="sm" />
)

const uploadButton = (
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
)

const bagIcon = (
  <Wrap marginInlineEnd="5" shouldWrapChildren="false" align="center">
    <Image src={bagSvg} width="34px" />
  </Wrap>
)

export default function NavActions() {
  const { data } = useQuery(['posts'], () => getUser())

  return (
    <Flex align="center">
      <NavSearchInput />
      {bagIcon}
      {data && avatar(data)}
      {uploadButton}
    </Flex>
  )
}
