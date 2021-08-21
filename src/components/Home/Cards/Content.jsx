import { TabPanel, TabPanels } from '@chakra-ui/react';
import React from 'react';
import Cards from './Cards';

export default function Content() {
  return (
    <TabPanels>
      <TabPanel px="0" mt="14px">
        <Cards />
      </TabPanel>
    </TabPanels>
  );
}
