import { HamburgerIcon } from '@chakra-ui/icons';
import { Button, Icon } from '@chakra-ui/react';
import React from 'react';

export default function FilterDropdown({ onToggle }) {
  return (
    <Button
      px={3}
      variant="outline"
      transition="all 0.2s"
      borderRadius="lg"
      fontWeight="regular"
      fontSize={13}
      borderWidth="1px"
      onClick={() => {
        onToggle();
      }}
    >
      <Icon as={HamburgerIcon} marginInlineEnd="8px" />
      Filters
    </Button>
  );
}
