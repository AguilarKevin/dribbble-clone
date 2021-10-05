import { IconButton } from '@chakra-ui/button'

import { HamburgerIcon, SearchIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import React, { useState } from 'react'

export default function MobileNavigation() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <NavButton navOpen={navOpen} setNavOpen={setNavOpen} />
      <NavMenu navOpen={navOpen} />
    </>
  )
}

const NavButton = ({ setNavOpen, navOpen }) => (
  <IconButton
    variant="ghost"
    aria-label="Call Segun"
    size="lg"
    color="#B6B5BC"
    onClick={() => setNavOpen(!navOpen)}
    fontSize="xl"
    icon={<NavButtonIcon navOpen={navOpen} />}
  />
)

const NavButtonIcon = ({ navOpen }) => {
  if (navOpen) {
    return <SmallCloseIcon fontSize="2xl" />
  }
  return <HamburgerIcon size="xl" />
}

const NavMenu = ({ navOpen }) => (
  <Box
    bg="white"
    d={navOpen ? 'block' : 'none'}
    pos="absolute"
    top="60px"
    w="full"
    h="calc(100vh - 60px)"
    insetX="0"
    px="6"
    py="6"
    zIndex="10"
  >
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.400" />}
      />
      <Input
        bg="#eee"
        borderRadius="lg"
        _focus={{
          borderColor: 'pink.300',
          borderWidth: '1px',
          bg: 'transparent',
          boxShadow: '0px 0px 1px 3px #FFE8E8',
        }}
        variant="filled"
        type="text"
        placeholder="Search"
      />
    </InputGroup>
  </Box>
)
