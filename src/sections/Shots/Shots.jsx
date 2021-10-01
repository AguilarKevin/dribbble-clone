import { Button } from '@chakra-ui/button'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Grid } from '@chakra-ui/layout'
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/menu'
import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router'

const showByOptions = [
  'Following',
  'Popular',
  'New & Noteworthy',
  'Goods for sale',
]
export default function Shots() {
  const [showBy, setShowBy] = useState(showByOptions[0])
  useEffect(() => {})

  return (
    <React.Fragment>
      <Flex px="6" py="5">
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
                <>
                  {index === showByOptions.length - 1 && <MenuDivider />}
                  <MenuItemOption
                    onClick={() => setShowBy(option)}
                    value={option}
                  >
                    {option}
                  </MenuItemOption>
                </>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>

      <Outlet />
    </React.Fragment>
  )
}
