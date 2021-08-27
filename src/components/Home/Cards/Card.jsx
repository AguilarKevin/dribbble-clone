import { Stack } from '@chakra-ui/react'
import React from 'react'
import CardInfo from './CardInfo'

import Mediaview from './MediaView'
import HoverButtons from './HoverButtons'

export default function Card({ title, media, likes, views, user }) {
  return (
    <Stack w="100%" h="300px">
      <Mediaview media={media}>
        <HoverButtons title={title} />
      </Mediaview>
      <CardInfo avatar={user.avatar} tag={user.tag} username={user.name} />
    </Stack>
  )
}
