import { Button } from '@chakra-ui/button'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/menu'
import React from 'react'

export default function ShowByMenu({ showByOptions, showBy, setShowBy }) {
  return (
    <Menu closeOnSelect={true}>
      <MenuButton
        as={Button}
        px={3}
        py={2}
        variant="filled"
        fontSize={15}
        fontWeight="regular"
        textColor="gray.600"
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: 'gray.200' }}
        _expanded={{ bg: 'white' }}
        _focus={{ boxShadow: 'outline' }}
      >
        {showBy}
        <ChevronDownIcon marginInlineStart={4} />
      </MenuButton>
      <MenuList textColor="gray.600" fontSize={12}>
        <MenuOptionGroup defaultValue={showBy} type="radio">
          {showByOptions.map((option, index) => (
            <div key={option}>
              {index === showByOptions.length - 1 && <MenuDivider />}
              <MenuItemOption onClick={() => setShowBy(option)} value={option}>
                {option}
              </MenuItemOption>
            </div>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
