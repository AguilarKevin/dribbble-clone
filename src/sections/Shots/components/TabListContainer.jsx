import { Stack, Text } from '@chakra-ui/layout'
import { Hide } from '@chakra-ui/media-query'
import { Tab, TabList } from '@chakra-ui/tabs'
import React, { useRef } from 'react'
import TabListScrollButtons from './TabListScrollButtons'

const tabTitles = [
  'All',
  'Animation',
  'Branding',
  'Illustration',
  'Mobile',
  'Print',
  'Product Design',
  'Typography',
  'Web Design',
]

export default function TabListContainer() {
  const tabsRef = useRef(null)

  return (
    <Stack direction="row" w="full" postition="relative" align="center">
      <Hide above="md">
        <TabListScrollButtons container={tabsRef} />
      </Hide>
      <TabList
        ref={tabsRef}
        w="full"
        h="full"
        py="2"
        alignItems="center"
        gridGap="1"
        overflowX="hidden"
        border="none"
      >
        {tabTitles.map((title, index) => (
          <Tab
            id={index}
            key={`tab-${title}`}
            p="1"
            fontSize="md"
            textColor="gray.600"
            borderRadius="8px"
            _selected={{
              bg: 'gray.50',
              textColor: 'gray.800',
              fontWeight: 'bold',
            }}
            _hover={{ bg: 'gray.100' }}
          >
            <Text minW="max-content">{title}</Text>
          </Tab>
        ))}
      </TabList>
    </Stack>
  )
}
