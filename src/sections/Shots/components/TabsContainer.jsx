import { IconButton } from '@chakra-ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, HStack, Stack, Text } from '@chakra-ui/layout'
import { Hide } from '@chakra-ui/media-query'
import { Tab, TabList, Tabs } from '@chakra-ui/tabs'
import React, { useLayoutEffect, useRef, useState } from 'react'

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
  useLayoutEffect(() => {
    const onLeft = scrollPosition === 'left'

    leftButtonRef.current.style.filter = onLeft ? 'opacity(0)' : 'opacity(1)'
    rightButtonRef.current.style.filter = onLeft ? 'opacity(1)' : 'opacity(0)'
  }, [scrollPosition])

  return (
    <Box>
      <Tabs minW={{ base: 'full', md: 'auto' }}>
        <Stack direction="row" postition="relative" align="center">
          <HStack
            pos="absolute"
            left="0"
            zIndex="10"
            right="0"
            justify="space-between"
            w="full"
            px="2"
          >
            <Hide above="md">
              <IconButton
                variant="unstyled"
                bgGradient="linear(to-r, #ffffff88, #ffffffaa)"
                ref={leftButtonRef}
                icon={<ChevronLeftIcon />}
                onClick={() => {
                  setScrollPosition('left')
                  scrollTo(tabsRef, 'left')
                }}
              />
            </Hide>
            <Hide above="md">
              <IconButton
                bgGradient="linear(to-r, #ffffff88, #ffffffaa)"
                variant="unstyled"
                ref={rightButtonRef}
                icon={<ChevronRightIcon />}
                onClick={() => {
                  setScrollPosition('right')
                  scrollTo(tabsRef, 'right', setScrollPosition)
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
            px="2"
            ref={tabsRef}
            overflowX="scroll"
            w="full"
            border="none"
            __css={{ scrollBehavior: 'smooth', scrollbarWidth: 0 }}
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
}
