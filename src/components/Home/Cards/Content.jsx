import React from 'react'
import Cards from './Cards'
import { TabPanel, TabPanels } from '@chakra-ui/react'

export default function Content() {
  return (
    <TabPanels>
      <TabPanel px="0" mt="14px">
        <Cards />
      </TabPanel>
    </TabPanels>
  )
}
