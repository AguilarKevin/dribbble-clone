import { Image } from '@chakra-ui/react'
import React from 'react'
import CardInfo from './CardInfo'

export default function Card({ media, likes, views, user }) {
  return (
    <div w="100%" h="300px">
      {mediaview(media)}
      <CardInfo avatar={user.avatar} tag={user.tag} username={user.name} />
    </div>
  )
}

const mediaview = media => {
  if (media[0].mimetype === 'video') {
    return (
      <video
        style={{ height: '230px', borderRadius: '8px', objectFit: 'cover' }}
        muted
        autoplay
      >
        <source src={`${media[0]?.domain}${media[0]?.path}`} type="video/mp4" />
      </video>
    )
  }
  return (
    <Image
      height="230px"
      objectFit="cover"
      borderRadius="8px"
      src={`${media[0]?.domain}${media[0]?.path}`}
    />
  )
}
