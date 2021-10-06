import { Box, Divider, Flex, Spacer } from '@chakra-ui/layout'
import { Hide } from '@chakra-ui/media-query'
import React from 'react'
import FilterButton from './FilterButton'
import FiltersCollapseContainer from './FiltersCollapseContainer'
import ShowByMenu from './ShowByMenu'
import TabListContainer from './TabListContainer'

export default function MobileToolbar({
  showByOptions,
  showBy,
  setShowBy,
  isMenuOpen,
  setMenuOpen,
}) {
  return (
    <Flex
      py="4"
      gridGap="4"
      flexWrap="wrap"
      justify={{ base: 'start', md: 'space-between' }}
    >
      <ShowByMenu {...{ showBy, setShowBy, showByOptions }} />
      <Hide above="md">
        <Spacer />
      </Hide>
      <FilterButton {...{ isMenuOpen, setMenuOpen }} />
      <Divider />
      <Box px={{ base: '5', md: '0' }} w="full">
        <TabListContainer mx={{ base: '4', md: '0' }} />
        <FiltersCollapseContainer isMenuOpen={isMenuOpen} />
      </Box>
    </Flex>
  )
}
