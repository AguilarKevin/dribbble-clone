import React from 'react'
import { Tab } from '@chakra-ui/react'

export default function TabItem({ children }) {
  return (
    <Tab
      fontSize="sm"
      textColor="gray.600"
      p="8px"
      borderRadius="8px"
      marginInline="8px"
      _selected={{
        bg: 'gray.200',
        textColor: 'gray.800',
        fontWeight: 'bold',
      }}
      _hover={{ bg: 'gray.100' }}
    >
      {children}
    </Tab>
  )
}
