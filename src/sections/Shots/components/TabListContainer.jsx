import { IconButton } from '@chakra-ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { HStack, Stack, Text } from '@chakra-ui/layout'
import { Hide } from '@chakra-ui/media-query'
import { Tab, TabList } from '@chakra-ui/tabs'
import React, { useLayoutEffect, useEffect, useRef, useState } from 'react'

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

const scrollTo = function (containerRef, to) {
  console.log(`scroll to  ${to}`)
  containerRef.current.scrollTo({
    left: to,
    behavior: 'smooth',
  })
}

// function calcSegment(current, max) {
//   if (current === 0) {
//     return 'left'
//   } else if (current >= max) {
//     return 'right'
//   }
//   return 'middle'
// }

function calcNewPos(direction, current, max) {
  let increment = max / 3

  const newCurrent =
    direction === 'toRight' ? current + increment : current - increment

  return Number.parseInt(
    direction === 'toRight'
      ? newCurrent > max
        ? max
        : newCurrent
      : newCurrent < 0
      ? 0
      : newCurrent
  )
}

function TabsScrollButtons({ container }) {
  const leftButtonRef = useRef(null)
  const rightButtonRef = useRef(null)
  const [scrollState, setScrollState] = useState({
    currentPos: 0,
    maxPos: container.current?.scrollWidth,
  })

  useEffect(() => {
    scrollState.maxPos = container.current?.scrollWidth
    return () => {}
  }, [scrollState, container])

  // useLayoutEffect(() => {
  //   const on = calcSegment(scrollState.currentPos, scrollState.maxPos)

  //   console.log(`on: ${on}`)
  //   leftButtonRef.current.style.filter =
  //     on === 'left' ? 'opacity(0)' : 'opacity(1)'
  //   rightButtonRef.current.style.filter =
  //     on === 'right' ? 'opacity(0)' : 'opacity(1)'
  // }, [scrollState])

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
            const newPos = calcNewPos(
              'toLeft',
              scrollState.currentPos,
              scrollState.maxPos
            )

            setScrollState({
              ...scrollState,
              currentPos: newPos,
            })

            console.log(container, scrollState)
            scrollTo(container, newPos)
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
            const newPos = calcNewPos(
              'toRight',
              scrollState.currentPos,
              scrollState.maxPos
            )

            setScrollState({
              ...scrollState,
              currentPos: newPos,
            })

            console.log(container, scrollState)
            scrollTo(container, newPos)
          }}
        />
      </Hide>
    </HStack>
  )
}

export default function TabListContainer() {
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
