import { Flex, useDisclosure } from '@chakra-ui/react'

import React from 'react'

import Filters from './Filters/Filters'
import Tabs from './Tabs'
import Dropdown from './Dropdown'
import FilterDropdown from './Filters/FilterDropdown'

export default function Toolbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div>
      <Flex justify="space-between" align="center">
        <Dropdown />
        <Tabs />
        <FilterDropdown onToggle={onToggle} />
      </Flex>
      <Filters isOpen={isOpen} />
    </div>
  )
}
