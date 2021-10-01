import { Flex } from '@chakra-ui/react'
import React from 'react'
import NavLink from './NavLink'

export default function NavLinks() {
  return (
    <Flex align="center">
      <NavLink>Inspiration</NavLink>
      <NavLink>Find Work</NavLink>
      <NavLink>Learn Design</NavLink>
      <NavLink>Go Pro</NavLink>
      <NavLink>Hire Designers</NavLink>
    </Flex>
  )
}
