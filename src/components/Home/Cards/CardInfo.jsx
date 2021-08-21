import React from 'react';
import { Flex, Spacer } from '@chakra-ui/react';

import CardInfoAvatar from './CardInfoAvatar';
import CardInfoButtons from './CardInfoButtons';

export default function CardInfo({ avatar, username, tag }) {
  return (
    <Flex mt="10px">
      <CardInfoAvatar img={avatar} username={username} tag={tag} />
      <Spacer />
      <CardInfoButtons />
    </Flex>
  );
}
