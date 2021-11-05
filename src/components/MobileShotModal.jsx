import { Avatar } from '@chakra-ui/avatar'
import { Button, IconButton } from '@chakra-ui/button'
import { EmailIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Spacer, Stack, Text } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/modal'

import HeartIcon from '../assets/heart.svg'
import MessageIcon from '../assets/message.svg'
import ShareIcon from '../assets/share.svg'
import InfoIcon from '../assets/info.svg'
import SaveIcon from '../assets/save-folder.svg'

import React from 'react'
import Mediaview from './Mediaview'

export default function MobileShotModal({
  data,
  navigate,
  currentMedia,
  setCurrentMedia,
  onOpenModalInfo,
}) {
  return (
    <Modal
      onClose={() => {
        navigate(-1)
      }}
      size="full"
      isOpen={true}
      scrollBehavior="inside"
      motionPreset="slideInBottom"
      borderRadius="0px"
    >
      <ModalOverlay />
      <ModalContent
        bg={{ base: 'white', md: 'transparent' }}
        borderRadius="0px"
      >
        <ModalCloseButton color={{ md: 'white' }} right="2px" top="2px" />
        <ModalBody
          px="0"
          py="8"
          bg="white"
          borderTopLeftRadius={{ md: '14px' }}
          d="flex"
          flexDir="column"
          alignItems={{ md: 'center' }}
        >
          <Flex px="4" flexDir={{ base: 'column', md: 'row' }} gridGap="4">
            <Text as="h3" fontWeight="560" w="full" fontSize={22}>
              {data?.title}
            </Text>
            <Flex gridGap="4" align="center" letterSpacing="tight">
              <Avatar
                size="md"
                src={data?.user.avatar}
                name={data?.user.name}
              />
              <Stack flex="1">
                <Text>{data?.user.name}</Text>
                <Flex align="center" gridGap="4px" fontSize="14px">
                  <Text>Follow</Text>
                  <Text as="span">•</Text>
                  <Text color="pink.500">Hire Us</Text>
                </Flex>
              </Stack>
            </Flex>
          </Flex>

          <Flex px="4" py="4" justify="space-between" gridGap="2">
            <IconButton
              variant="outline"
              width="40px"
              height="40px"
              icon={<Image width="18px" height="18px" src={SaveIcon} />}
            />
            <IconButton
              variant="outline"
              width="40px"
              height="40px"
              icon={<Image width="18px" height="18px" src={HeartIcon} />}
            />
            <Spacer />
            <IconButton
              variant="outline"
              width="40px"
              height="40px"
              icon={<Image width="18px" height="18px" src={MessageIcon} />}
            />

            <IconButton
              variant="outline"
              width="40px"
              height="40px"
              icon={<Image width="18px" height="18px" src={ShareIcon} />}
            />

            <IconButton
              variant="outline"
              width="40px"
              height="40px"
              onClick={onOpenModalInfo}
              icon={<Image width="18px" height="18px" src={InfoIcon} />}
            />
          </Flex>
          <Box w={{ base: 'full', md: '60%' }}>
            <Mediaview media={data?.media[currentMedia]} />
          </Box>
          <Flex
            w={{ base: 'full', md: '50%' }}
            py="8"
            justify="center"
            gridGap="4"
            px="4"
          >
            {data?.media.map((media, index) => {
              return index === currentMedia ? (
                <Box
                  key={index}
                  flex="1"
                  borderRadius="md"
                  overflow="hidden"
                  position="relative"
                  __css={{
                    boxShadow: '0px 0px 1px 3px #ff61bd',
                  }}
                >
                  <Box w="full" h="full" position="relative">
                    <Mediaview media={media} />
                  </Box>
                  <Box
                    position="absolute"
                    inset="0"
                    zIndex="10"
                    onClick={() => setCurrentMedia(index)}
                  />
                </Box>
              ) : (
                <Box
                  key={index}
                  flex="1"
                  borderRadius="md"
                  overflow="hidden"
                  position="relative"
                >
                  <Box w="full" h="full" position="relative">
                    <Mediaview media={media} />
                  </Box>
                  <Box
                    position="absolute"
                    top="0"
                    bottom="0"
                    left="0"
                    right="0"
                    zIndex="15"
                    onClick={() => setCurrentMedia(index)}
                  />
                </Box>
              )
            })}
          </Flex>
          <Box px="4" py="8">
            <Text lineHeight="1.8">{data?.description}</Text>
          </Box>

          <Flex px="4" w="full" align="center" gridGap="2">
            <Box flex="1" h="1px" bg="gray.300" />
            <Avatar size="lg" src={data?.user.avatar} name={data?.user.name} />
            <Box flex="1" h="1px" bg="gray.300" />
          </Flex>
          <Flex px="4" py="6" flexDir="column" align="center" gridGap="4">
            <Text>{data?.user.name}</Text>
            <Button colorScheme="pink" leftIcon={<EmailIcon />}>
              Hire Me
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
