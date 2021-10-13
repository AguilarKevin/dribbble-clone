import { Image } from '@chakra-ui/image'
import React from 'react'

export default function Mediaview({ media }) {
  if (media?.mimetype === 'video') {
    return (
      <video
        style={{
          w: 'full',
          h: 'full',
        }}
        muted
        autoPlay
      >
        <source src={`${media?.domain}${media?.path}`} type="video/mp4" />
      </video>
    )
  }
  return (
    <Image
      w="full"
      h="full"
      objectFit="cover"
      src={`${media?.domain}${media?.path}`}
    />
  )
}
