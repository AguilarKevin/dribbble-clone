import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'

export default function MobileNavigation() {
  return (
    <IconButton
      variant="ghost"
      aria-label="Call Segun"
      size="lg"
      color="#B6B5BC"
      fontSize="xl"
      icon={<HamburgerIcon size="xl" />}
    />
  )
}
