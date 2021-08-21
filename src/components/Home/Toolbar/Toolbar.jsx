import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure,
  TabList,
  Spacer,
  Icon,
} from '@chakra-ui/react';

import React from 'react';
import TabItem from './TabItem';

import Filters from './Filters/Filters';
import Tabs from './Tabs';
import Dropdown from './Dropdown';
import FilterDropdown from './Filters/FilterDropdown';

export default function Toolbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Flex justify="space-between" align="center">
        <Dropdown />
        <Tabs />
        <FilterDropdown onToggle={onToggle} />
      </Flex>
      <Filters isOpen={isOpen} />
    </div>
  );
}
