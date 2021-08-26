import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import CardInfo from './CardInfo'
import HeartIcon from '../../../assets/heart.svg'
import SaveIcon from '../../../assets/save-folder.svg'

function onMouseOver(e) {
  e.target.parentElement.querySelector('video').play()
}
function onMouseOut(e) {
  // e.target.parentElement.querySelector('video').pause()
}
function isVideo(mimetype) {
  return mimetype === 'video'
}

export default function Card({ title, media, likes, views, user }) {
  return (
    <div w="100%" h="300px">
      <Box
        position="relative"
        onMouseEnter={isVideo(media[0].mimetype) ? onMouseOver : null}
        onMouseOut={isVideo(media[0].mimetype) ? onMouseOut : null}
      >
        {mediaview(media)}
        {hoverButtons(title)}
      </Box>
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

const hoverButtons = title => (
  <Flex
    position="absolute"
    align="flex-end"
    inset="0"
    zIndex="10"
    bgGradient="linear(to-t,gray.900, transparent)"
    px="18px"
    pb="18px"
    borderRadius="8px"
    gridColumnGap="10px"
    justify="center"
    opacity="0"
    transition=" ease 0.2s"
    _hover={{ opacity: 1 }}
  >
    <Text width="60%" color="white" isTruncated>
      {title}
    </Text>
    <IconButton
      width="34px"
      height="36px"
      borderRadius="8px"
      icon={<Image width="14px" height="14px" src={SaveIcon} />}
    />
    <IconButton
      width="34px"
      height="36px"
      borderRadius="8px"
      icon={<Image width="14px" height="14px" src={HeartIcon} />}
    />
  </Flex>
)
