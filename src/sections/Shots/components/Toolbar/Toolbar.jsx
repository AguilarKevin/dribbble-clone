import React from 'react'
import FilterButton from './FilterButton'
import FiltersCollapseContainer from './FiltersCollapseContainer'
import ShowByMenu from './ShowByMenu'
import TabListContainer from './TabListContainer'
import { Flex, Stack } from '@chakra-ui/layout'

export default function Toolbar({
  showByOptions,
  showBy,
  setShowBy,
  isMenuOpen,
  setMenuOpen,
}) {
  return (
    <Stack px="4.5rem" pt="8">
      <Flex gridGap="4" justify={{ base: 'start', md: 'space-between' }}>
        <ShowByMenu {...{ showBy, setShowBy, showByOptions }} />

        <FilterButton {...{ isMenuOpen, setMenuOpen }} />
        <TabListContainer />
      </Flex>
      <Stack minW={{ base: 'full', md: 'auto' }}>
        <FiltersCollapseContainer isMenuOpen={isMenuOpen} />
      </Stack>
    </Stack>
  )
}
