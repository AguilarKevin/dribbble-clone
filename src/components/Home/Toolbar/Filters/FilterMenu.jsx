import { Menu, MenuList } from '@chakra-ui/react';
import React from 'react';
import FilterMenuButton from './FilterMenuButton';

export default function FilterMenu({ title, children }) {
  return (
    <Menu>
      <FilterMenuButton title={title} />
      <MenuList borderRadius="10px" fontSize="12px" textColor="gray.700">
        {children}
      </MenuList>
    </Menu>
  );
}
