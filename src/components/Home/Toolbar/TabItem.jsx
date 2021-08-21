import React from 'react';
import { Tab } from '@chakra-ui/react';

export default function TabItem({ children }) {
  return (
    <Tab
      fontSize="sm"
      textColor="gray.600"
      p="8px"
      borderRadius="8px"
      marginInline="12px"
      _selected={{
        bg: 'gray.200',
        textColor: 'gray.800',
        fontWeight: 'bold',
      }}
    >
      {children}
    </Tab>
  );
}
