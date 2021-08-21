import { Avatar, Badge, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function CardInfoAvatar({ img, username, tag }) {
  return (
    <Flex align="center">
      <Avatar size="xs" name="test" mr="4" src={img} />
      <Text mr="1.5" fontSize="xs" fontWeight="bold">
        {username}
      </Text>
      <Badge variant="subtle" fontSize="10px" bg="gray.400" textColor="white">
        {tag}
      </Badge>
    </Flex>
  );
}
