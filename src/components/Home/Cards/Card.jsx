import { Image } from '@chakra-ui/react'
import React from 'react'
import CardInfo from './CardInfo'

export default function Card({ image, likes, views, username, tag, avatar }) {
  return (
    <div w="100%" h="300px">
      <Image height="230px" objectFit="cover" borderRadius="8px" src={image} />
      <CardInfo avatar={avatar} tag={tag} username={username} />
    </div>
  )
}
