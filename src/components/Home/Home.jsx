import { Tabs } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from './Cards/Content'
import Toolbar from './Toolbar/Toolbar'

export default function Home() {
  return (
    <React.Fragment>
      <Tabs variant="unstyled" marginInline="16" marginBlockStart="8">
        <Toolbar />
        <Content />
      </Tabs>
      <Outlet />
    </React.Fragment>
  )
}
