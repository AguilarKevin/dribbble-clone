import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import React from 'react'

export default function Dropdown() {
  return (
    <Menu>
      <MenuButton
        px={3}
        py={2}
        fontSize={13}
        textColor="gray.600"
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        Popular <ChevronDownIcon marginInlineStart={4} />
      </MenuButton>
      <MenuList textColor="gray.600" fontSize={12}>
        <MenuItem>Following</MenuItem>
        <MenuItem>Popular</MenuItem>

        <MenuItem>New & Noteworthy</MenuItem>
        <MenuDivider />
        <MenuItem>Goods for sale</MenuItem>
      </MenuList>
    </Menu>
  )
}
