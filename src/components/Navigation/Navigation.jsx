import { Flex, Spacer } from '@chakra-ui/react';

import React from 'react';
import NavLinks from './NavLinks';
import NavActions from './NavActions';

export default function Header() {
  return (
    <Flex
      h="80px"
      justify="space-between"
      paddingInline="6"
      borderBottomWidth="1px"
      borderBottom="gray.300"
    >
      <NavLinks />
      <Spacer />
      <NavActions />
    </Flex>
  );
}
