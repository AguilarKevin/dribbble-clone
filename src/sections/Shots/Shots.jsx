import { Hide, Show } from '@chakra-ui/media-query'
import React, { useState } from 'react'
import { Outlet } from 'react-router'

import { TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import MobileToolbar from './components/MobileToolbar'
import Toolbar from './components/Toolbar'

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
      <Tabs minW={{ base: 'full', md: 'auto' }}>
        <Hide above="md">
          <MobileToolbar
            {...{ showByOptions, showBy, setShowBy, isMenuOpen, setMenuOpen }}
          />
        </Hide>
        <Show above="md">
          <Toolbar
            {...{ showByOptions, showBy, setShowBy, isMenuOpen, setMenuOpen }}
          />
        </Show>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Outlet />
    </React.Fragment>
  )
}
