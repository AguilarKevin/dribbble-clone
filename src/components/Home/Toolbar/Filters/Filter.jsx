import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

export default function Filter({ title, children }) {
  return (
    <Stack w="18%">
      <Text textColor="gray.800" fontSize={14} fontWeight="bold">
        {title}
      </Text>
      {children}
    </Stack>
  );
}
