import { Box, Flex, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import CardInfo from './CardInfo'
import HeartIcon from '../../../assets/heart.svg'
import SaveIcon from '../../../assets/save-folder.svg'

export default function Card({ title, media, likes, views, user }) {
  return (
    <Stack w="100%" h="300px">
      <Mediaview media={media}>{hoverButtons(title)}</Mediaview>
      <CardInfo avatar={user.avatar} tag={user.tag} username={user.name} />
    </Stack>
  )
}

const Mediaview = ({ media, children }) => {
  const videoRef = useRef(null)

  if (media[0].mimetype === 'video') {
    return (
      <Box
        position="relative"
        onMouseEnter={() => onMouseOver(videoRef)}
        onMouseOut={() => onMouseOut(videoRef)}
      >
        <video
          ref={videoRef}
          style={{ height: '230px', borderRadius: '8px', objectFit: 'cover' }}
          muted
        >
          <source
            src={`${media[0]?.domain}${media[0]?.path}`}
            type="video/mp4"
          />
        </video>
        {children}
      </Box>
    )
  }
  return (
    <Box position="relative">
      <Image
        height="230px"
        objectFit="cover"
        borderRadius="8px"
        src={`${media[0]?.domain}${media[0]?.path}`}
      />
      {children}
    </Box>
  )
}

function onMouseOver(ref) {
  ref?.current.play()
}
function onMouseOut(ref) {
  ref?.current.pause()
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
