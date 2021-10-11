import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'
import React from 'react'

export default function NavigationToggleButton({ setNavOpen, navOpen }) {
  return (
    <IconButton
      variant="ghost"
      aria-label="Call Segun"
      size="lg"
      color="#B6B5BC"
      onClick={() => setNavOpen(!navOpen)}
      fontSize="xl"
      icon={
        navOpen ? (
          <SmallCloseIcon fontSize="2xl" />
        ) : (
          <HamburgerIcon size="xl" />
        )
      }
    />
  )
}
