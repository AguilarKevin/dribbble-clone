import { Button, ButtonGroup, IconButton } from '@chakra-ui/button'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from '@chakra-ui/icons'
import { Box, Flex, Spacer, Text } from '@chakra-ui/layout'
import { Hide, Show } from '@chakra-ui/media-query'
import { Icon } from '@chakra-ui/icon'
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/menu'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import React, { useState, useEffect, useRef } from 'react'
import { Outlet } from 'react-router'

const showByOptions = [
  'Following',
  'Popular',
  'New & Noteworthy',
  'Goods for sale',
]

const tabTitles = [
  'All',
  'Animation',
  'Branding',
  'Illustration',
  'Mobile',
  'Print',
  'Product Design',
  'Typography',
  'Web Design',
]

export default function Shots() {
  const [showBy, setShowBy] = useState(showByOptions[0])
  const [scrollSide, setScrollSide] = useState('left')

  const tabsRef = useRef(null)

  return (
    <React.Fragment>
      <Flex px="6" py="5" gridGap="4" flexWrap="wrap">
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

        <Hide above="md">
          <Spacer />
        </Hide>
        <Button
          px={3}
          variant="outline"
          transition="all 0.2s"
          borderRadius="lg"
          fontWeight="regular"
          fontSize={13}
          borderWidth="1px"
          order={{ base: '0', md: '2' }}
          onClick={() => {}}
        >
          <Icon as={HamburgerIcon} marginInlineEnd="8px" />
          Filters
        </Button>

        <Tabs minW={{ base: 'full', md: 'auto' }}>
          <Flex align="center" gridGap="4">
            <Hide above="md">
              <IconButton
                d={scrollSide === 'right' ? 'block' : 'none'}
                icon={<ChevronLeftIcon />}
                onClick={() => {
                  scrollLeft(tabsRef)
                  setScrollSide('left')
                }}
              />
            </Hide>
            <TabList
              d="flex"
              alignItems="center"
              gridGap="2"
              h="full"
              py="2"
              ref={tabsRef}
              overflow="hidden"
              w="full"
              border="none"
            >
              {tabTitles.map(title => (
                <Tab
                  fontSize="md"
                  p="2"
                  h="50%"
                  textColor="gray.600"
                  borderRadius="8px"
                  _selected={{
                    bg: 'gray.200',
                    textColor: 'gray.800',
                    fontWeight: 'bold',
                  }}
                  _hover={{ bg: 'gray.100' }}
                >
                  <Text> {title}</Text>
                </Tab>
              ))}
            </TabList>
            <Hide above="md">
              <IconButton
                d={scrollSide === 'left' ? 'block' : 'none'}
                icon={<ChevronRightIcon />}
                onClick={() => {
                  scrollRight(tabsRef)
                  setScrollSide('right')
                }}
              />
            </Hide>
          </Flex>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>

      <Outlet />
    </React.Fragment>
  )
}

const scrollRight = function (containerRef) {
  containerRef.current.scrollLeft += containerRef.current.offsetWidth
}
const scrollLeft = function (containerRef) {
  containerRef.current.scrollLeft -= containerRef.current.offsetWidth
}
