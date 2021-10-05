import React from 'react'
import { Stack } from '@chakra-ui/react'

import SaveIcon from '../../../../assets/save-folder.svg'
import HeartIcon from '../../../../assets/heart.svg'
import { ViewIcon } from '@chakra-ui/icons'
import { Flex, Text, Spacer, Box, Badge } from '@chakra-ui/layout'
import { IconButton, Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Avatar } from '@chakra-ui/avatar'

export default function ShotCard({ id, title, media, likes, views, user }) {
  return (
    <Stack w="100%">
      <Mediaview media={media}>
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
      </Mediaview>
      <Flex>
        <Flex align="center">
          <Avatar size="xs" name="test" mr="4" src={user.Avatar} />
          <Text mr="1.5" fontSize="xs" fontWeight="bold">
            {user.username}
          </Text>
          <Badge
            variant="subtle"
            fontSize="10px"
            bg="gray.400"
            textColor="white"
          >
            {user.tag}
          </Badge>
        </Flex>
        <Spacer />
        <Flex align="center">
          <Button
            size="xs"
            fontSize="10px"
            color="gray.600"
            bg="white"
            leftIcon={<Image textColor="gray.600" src={HeartIcon} />}
          >
            211
          </Button>
          <Button
            size="xs"
            fontSize="10px"
            color="gray.600"
            bg="white"
            leftIcon={<ViewIcon />}
          >
            11.4K
          </Button>
        </Flex>
      </Flex>
    </Stack>
  )
}

function Mediaview({ media, children }) {
  const videoRef = React.useRef(null)

  if (media[0].mimetype === 'video') {
    return (
      <Box
        position="relative"
        onMouseEnter={() => onMouseOver(videoRef)}
        onMouseOut={() => onMouseOut(videoRef)}
      >
        <video
          ref={videoRef}
          style={{
            w: 'full',
            h: { base: '300px', md: '300px' },
            borderRadius: '8px',
            objectFit: 'cover',
          }}
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
        w="full"
        h={{ base: '300px', md: '230px' }}
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
