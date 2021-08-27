import { Flex, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import HeartIcon from '../../../assets/heart.svg'
import SaveIcon from '../../../assets/save-folder.svg'

export default function HoverButtons({ title }) {
  return (
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
}
