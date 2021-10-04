import { Button } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'

export default function FilterButton({ isMenuOpen, setMenuOpen }) {
  return (
    <Button
      px={3}
      variant="outline"
      transition="all 0.2s"
      borderRadius="lg"
      fontWeight="regular"
      fontSize={13}
      borderWidth="1px"
      order={{ base: '0', md: '2' }}
      onClick={() => setMenuOpen(!isMenuOpen)}
      leftIcon={<HamburgerIcon />}
    >
      Filters
    </Button>
  )
}
