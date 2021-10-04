import { Flex, Spacer, Stack } from '@chakra-ui/layout'
import { Hide } from '@chakra-ui/media-query'
import React, { useState } from 'react'
import { Outlet } from 'react-router'
import ShowByMenu from './components/ShowByMenu'
import FilterButton from './components/FilterButton'
import FiltersCollapseContainer from './components/FiltersCollapseContainer'
import TabsContainer from './components/TabsContainer'
import { TabPanel, TabPanels } from '@chakra-ui/tabs'

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
      <Flex px="6" py="5" gridGap="4" flexWrap="wrap">
        <ShowByMenu {...{ showBy, setShowBy, showByOptions }} />
        <Hide above="md">
          <Spacer />
        </Hide>
        <FilterButton {...{ isMenuOpen, setMenuOpen }} />
        <Stack minW={{ base: 'full', md: 'auto' }}>
          <FiltersCollapseContainer isMenuOpen={isMenuOpen} />
          <TabsContainer>
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
          </TabsContainer>
        </Stack>
      </Flex>

      <Outlet />
    </React.Fragment>
  )
}
