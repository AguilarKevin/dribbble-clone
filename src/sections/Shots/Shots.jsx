import { Flex, Spacer, Stack } from '@chakra-ui/layout'
import { Hide } from '@chakra-ui/media-query'
import React, { useState } from 'react'
import { Outlet } from 'react-router'
import ShowByMenu from './components/ShowByMenu'
import FilterButton from './components/FilterButton'
import FiltersCollapseContainer from './components/FiltersCollapseContainer'
import TabListContainer from './components/TabListContainer'
import { TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'

const showByOptions = [
  'Following',
  'Popular',
  'New & Noteworthy',
  'Goods for sale',
]

export default function Shots() {
  const [showBy, setShowBy] = useState(showByOptions[0])

  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <React.Fragment>
      <Tabs minW={{ base: 'full', md: 'auto' }} px="6">
        <Flex py="5" gridGap="4" flexWrap="wrap" align="start">
          <ShowByMenu {...{ showBy, setShowBy, showByOptions }} />
          <Hide above="md">
            <Spacer />
          </Hide>
          <FilterButton {...{ isMenuOpen, setMenuOpen }} />
          <Stack minW={{ base: 'full', md: 'auto' }}>
            <TabListContainer />
            <FiltersCollapseContainer isMenuOpen={isMenuOpen} />
          </Stack>
        </Flex>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Outlet />
    </React.Fragment>
  )
}
