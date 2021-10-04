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

function TabsScrollButtons({ container }) {
  const leftButtonRef = useRef(null)
  const rightButtonRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState({
    current: 0,
    max: container.scrollWidth,
  })

  useLayoutEffect(() => {
    const onLeft = scrollPosition === 'left'
    const onRight = scrollPosition === 'right'

    leftButtonRef.current.style.filter = onLeft ? 'opacity(0)' : 'opacity(1)'
    rightButtonRef.current.style.filter = onRight ? 'opacity(0)' : 'opacity(1)'
  }, [scrollPosition])

  return (
    <HStack
      w="full"
      px="2"
      pos="absolute"
      left="0"
      right="0"
      zIndex="5"
      justify="space-between"
    >
      <Hide above="md">
        <IconButton
          ref={leftButtonRef}
          bgGradient="linear(to-r, #ffffff88, #ffffffaa)"
          variant="unstyled"
          icon={<ChevronLeftIcon />}
          onClick={() => {
            scrollTo(container)
          }}
        />
      </Hide>
      <Hide above="md">
        <IconButton
          ref={rightButtonRef}
          bgGradient="linear(to-l, #ffffff88, #ffffffaa)"
          variant="unstyled"
          icon={<ChevronRightIcon />}
          onClick={() => {
            scrollTo(container)
          }}
        />
      </Hide>
    </HStack>
  )
}

export default function TabListContainer({ children }) {
  const tabsRef = useRef(null)

  return (
    <Stack direction="row" w="full" postition="relative" align="center">
      <TabsScrollButtons container={tabsRef} />
      <TabList
        ref={tabsRef}
        w="full"
        h="full"
        py="2"
        alignItems="center"
        gridGap="1"
        overflowX="hidden"
        border="none"
      >
        {tabTitles.map((title, index) => (
          <Tab
            id={index}
            key={`tab-${title}`}
            p="1"
            fontSize="md"
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
  )
}

const scrollTo = function (containerRef, offsetLeft) {
  containerRef.current.scrollTo({
    left: offsetLeft,
    behavior: 'smooth',
  })
}
