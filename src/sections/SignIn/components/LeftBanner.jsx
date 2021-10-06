import { Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import AppLogo from './AppLogo'

export default function LeftBanner() {
  return (
    <Stack
      filter="opacity(0.55)"
      bg="pink.200"
      h="100vh"
      pl="16"
      pr="20"
      py="16"
      align="start"
      gridGap="6"
    >
      <AppLogo />
      <Text
        color="pink.900"
        fontWeight="bold"
        fontSize="20pt"
        lineHeight="22pt"
      >
        Discover the world’s top Designers & Creatives.
      </Text>
    </Stack>
  )
}
