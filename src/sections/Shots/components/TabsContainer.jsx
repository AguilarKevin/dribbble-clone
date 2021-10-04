import { IconButton } from '@chakra-ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import { Hide } from '@chakra-ui/media-query'
import { Tab, TabList, Tabs } from '@chakra-ui/tabs'
import React, { useEffect, useRef, useState } from 'react'

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

export default function TabsContainer({ children }) {
  const [scrollPosition, setScrollPosition] = useState('left')
  const tabsRef = useRef(null)
  const leftButtonRef = useRef(null)
  const rightButtonRef = useRef(null)
  useEffect(() => {}, [scrollPosition])

  return (
    <Box>
      <Tabs minW={{ base: 'full', md: 'auto' }}>
        <Stack direction="row" postition="relative" align="center">
          <HStack
            pos="absolute"
            left="0"
            right="0"
            justify="space-between"
            w="full"
          >
            <Hide above="md">
              <IconButton
                variant="unstyled"
                bg="transparent"
                ref={leftButtonRef}
                // d={scrollPosition === 'right' ? 'block' : 'none'}
                icon={<ChevronLeftIcon />}
                onClick={() => {
                  setScrollPosition(scrollTo(tabsRef, 'left'))
                }}
              />
            </Hide>
            <Hide above="md">
              <IconButton
                bg="transparent"
                variant="unstyled"
                ref={rightButtonRef}
                // d={scrollPosition === 'left' ? 'block' : 'none'}
                icon={<ChevronRightIcon />}
                onClick={() => {
                  setScrollPosition(scrollTo(tabsRef, 'right'))
                }}
              />
            </Hide>
          </HStack>
          <TabList
            d="flex"
            alignItems="center"
            gridGap="2"
            h="full"
            position="relative"
            py="2"
            ref={tabsRef}
            overflowX="scroll"
            w="full"
            border="none"
            __css={{ scrollBehavior: 'smooth' }}
          >
            {tabTitles.map((title, index) => (
              <Tab
                fontSize="md"
                id={index}
                p="2"
                h="50%"
                key={`tab-${title}`}
                textColor="gray.600"
                borderRadius="8px"
                _selected={{
                  bg: 'gray.50',
                  textColor: 'gray.800',
                  fontWeight: 'bold',
                }}
                _hover={{ bg: 'gray.100' }}
              >
                <Text minW="max-content">{title}</Text>
              </Tab>
            ))}
          </TabList>
        </Stack>

        {children}
      </Tabs>
    </Box>
  )
}

const scrollTo = function (containerRef, to) {
  console.log(containerRef)

  containerRef.current.scrollTo({
    left: to === 'right' ? containerRef.current.scrollWidth : 0,
    behavior: 'smooth',
  })

  return containerRef?.current.scrollLeft === containerRef.current.offsetWidth
    ? 'right'
    : 'left'
}
