import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Flex, Stack, Text } from '@chakra-ui/layout'
import { Collapse } from '@chakra-ui/transition'
import React from 'react'

// const madeWithMenuItems = []
// const downloadsMenuItems = []

export default function FiltersCollapseContainer({ isMenuOpen }) {
  return (
    <Collapse in={isMenuOpen} animateOpacity>
      <Flex flexDir={{ base: 'column', md: 'row' }} w="full" gridGap="8" py="4">
        <Stack w="full">
          <Text fontWeight="semibold" fontSize="sm">
            Tags
          </Text>
          <InputGroup w="full">
            <InputLeftElement
              children={<SearchIcon zIndex="-1" color="gray.500" />}
            />
            <Input
              borderRadius="10px"
              bg="#eee"
              w="full"
              border="none"
              fontSize="14px"
              placeholder="Search"
            />
          </InputGroup>
        </Stack>

        <Stack>
          <Text fontWeight="semibold" fontSize="sm">
            Color
          </Text>
        </Stack>
      </Flex>
    </Collapse>
  )
}
