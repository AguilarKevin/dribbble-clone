import { Flex, Stack, Text } from '@chakra-ui/layout'
import { Collapse } from '@chakra-ui/transition'
import React from 'react'

export default function FiltersCollapseContainer({ isMenuOpen }) {
  return (
    <Collapse in={isMenuOpen} animateOpacity>
      <Flex w="full">
        <Stack>
          <Text>Tags</Text>
        </Stack>
      </Flex>
    </Collapse>
  )
}
