import { Link } from '@chakra-ui/react';
import React from 'react';

export default function NavLink(props) {
  return (
    <Link
      fontSize="sm"
      color="gray.600"
      fontWeight="semibold"
      marginInlineEnd="7"
      _hover={{
        color: 'pink.500',
      }}
    >
      {props.children}
    </Link>
  );
}
