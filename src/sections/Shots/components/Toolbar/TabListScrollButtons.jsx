import { IconButton } from '@chakra-ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function TabListScrollButtons({ container }) {
  const leftButtonRef = useRef(null)
  const rightButtonRef = useRef(null)
  const [scrollState, setScrollState] = useState({
    currentPos: 0,
    maxPos: container.current?.scrollWidth,
  })

  useEffect(() => {
    scrollState.maxPos = (container.current?.scrollWidth / 3) * 2
    return () => {}
  }, [scrollState, container])

  useLayoutEffect(() => {
    const on = calcSegment(scrollState.currentPos, scrollState.maxPos)

    console.log(`on: ${on}`)
    leftButtonRef.current.style.filter =
      on === 'left' ? 'opacity(0)' : 'opacity(1)'
    rightButtonRef.current.style.filter =
      on === 'right' ? 'opacity(0)' : 'opacity(1)'
  }, [scrollState.currentPos, scrollState.maxPos])

  return (
    <>
      <IconButton
        ref={leftButtonRef}
        bgGradient="linear(to-r, #ffffff88, #ffffffaa)"
        variant="unstyled"
        pos="absolute"
        left="1"
        zIndex="3"
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

      <IconButton
        ref={rightButtonRef}
        bgGradient="linear(to-l, #ffffff88, #ffffffaa)"
        variant="unstyled"
        pos="absolute"
        right="1"
        zIndex="3"
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
    </>
  )
}

const scrollTo = function (containerRef, to) {
  console.log(`scroll to  ${to}`)
  containerRef.current.scrollTo({
    left: to,
    behavior: 'smooth',
  })
}

function calcSegment(current, max) {
  if (current === 0) {
    return 'left'
  } else if (current >= max) {
    return 'right'
  }
  return 'middle'
}

function calcNewPos(direction, current, max) {
  let increment = max / 1.7

  const newCurrent = Math.ceil(
    direction === 'toRight' ? current + increment : current - increment
  )

  return direction === 'toRight'
    ? newCurrent > max
      ? max
      : newCurrent
    : newCurrent < 0
    ? 0
    : newCurrent
}
