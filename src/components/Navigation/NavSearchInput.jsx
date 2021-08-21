import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

export default function NavSearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<SearchIcon color="gray.500" w="12px" />} />
      <Input
        py={0}
        border="none"
        borderRadius="8px"
        placeholder="Search"
        textColor="gray.700"
        fontSize={13}
        bg="#efefef"
        width="120px"
      />
    </InputGroup>
  );
}
