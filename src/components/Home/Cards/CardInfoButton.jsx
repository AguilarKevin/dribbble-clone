import { Button } from '@chakra-ui/react';
import React from 'react';

export default function CardInfoButton({ leftIcon, children }) {
  return (
    <Button
      size="xs"
      fontSize="10px"
      color="gray.600"
      bg="white"
      leftIcon={leftIcon}
    >
      {children}
    </Button>
  );
}
