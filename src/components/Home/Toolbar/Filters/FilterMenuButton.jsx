import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, MenuButton } from '@chakra-ui/react';
import React from 'react';

export default function FilterMenuButton({ title }) {
  return (
    <MenuButton
      variant="outline"
      as={Button}
      textAlign="left"
      fontWeight="regular"
      textColor="gray.500"
      borderRadius="10px"
      fontSize="14px"
      rightIcon={<ChevronDownIcon />}
    >
      {title}
    </MenuButton>
  );
}
