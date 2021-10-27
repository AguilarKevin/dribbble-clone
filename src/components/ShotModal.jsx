import { Button, IconButton } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'

import HeartIcon from '../assets/heart.svg'
import MessageIcon from '../assets/message.svg'
import ShareIcon from '../assets/share.svg'
import InfoIcon from '../assets/info.svg'
import SaveIcon from '../assets/save-folder.svg'

import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@chakra-ui/avatar'
import Mediaview from './Mediaview'
import { EmailIcon } from '@chakra-ui/icons'
import { SlideFade } from '@chakra-ui/transition'

export default function ShotModal({
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
        pt="54px"
      >
        <ModalCloseButton color={{ md: 'white' }} />

        <ModalBody py="20" bg="white" borderTopLeftRadius={{ md: '14px' }}>
          <Flex px="28" justifyContent="center" position="relative">
            <Flex w="70%" flexDir="column" gridGap="14">
              <Flex gridGap="4" alignItems="center" px="14">
                <Avatar
                  size="md"
                  src={data?.user.avatar}
                  name={data?.user.name}
                />
                <Stack>
                  <Text as="h1" fontWeight="560" w="full" fontSize={16}>
                    {data?.title}
                  </Text>
                  <Flex align="center" gridGap="4px" fontSize="14px">
                    <Text>{data?.user.name}</Text>
                    <Text>Follow</Text>
                    <Text as="span">•</Text>
                    <Text color="pink.500">Hire Us</Text>
                  </Flex>
                </Stack>
                <Spacer />
                <Flex>
                  <Button
                    borderRadius="10px"
                    fontSize="sm"
                    bg="#efefef"
                    mx="8px"
                  >
                    Save
                  </Button>
                  <Button
                    fontSize="sm"
                    bg="#efefef"
                    borderRadius="10px"
                    leftIcon={<Image src={HeartIcon} />}
                  >
                    Like
                  </Button>
                </Flex>
              </Flex>
              <Box w="full" overflow="hidden" borderRadius="14px">
                <Mediaview media={data?.media[currentMedia]} />
              </Box>
              <Flex w="full" py="8" justify="center" gridGap="4" px="4">
                {data?.media.map((media, index) => {
                  return index === currentMedia ? (
                    <Box
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
                <Avatar
                  size="md"
                  src={data?.user.avatar}
                  name={data?.user.name}
                />
                <Box flex="1" h="1px" bg="gray.300" />
              </Flex>
              <Flex px="4" py="6" flexDir="column" align="center" gridGap="4">
                <Text>{data?.user.name}</Text>
                <Button colorScheme="pink" leftIcon={<EmailIcon />}>
                  Hire Me
                </Button>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              align="center"
              position="absolute"
              top="44px"
              right="34px"
            >
              <Avatar
                width="40px"
                height="40px"
                src={data?.user.avatar}
                name={data?.user.name}
                marginBlockEnd="14px"
              />
              <IconButton
                variant="outline"
                width="40px"
                height="40px"
                marginBlockEnd="14px"
                icon={<Image width="18px" height="18px" src={MessageIcon} />}
              />

              <IconButton
                variant="outline"
                width="40px"
                height="40px"
                marginBlockEnd="14px"
                icon={<Image width="18px" height="18px" src={ShareIcon} />}
              />

              <IconButton
                variant="outline"
                width="40px"
                height="40px"
                marginBlockEnd="14px"
                onClick={onOpenModalInfo}
                icon={<Image width="18px" height="18px" src={InfoIcon} />}
              />
              <SlideFade in={true} offsetY="-20px">
                <Flex flexDirection="column">
                  <IconButton
                    variant="outline"
                    width="40px"
                    height="40px"
                    marginBlockEnd="14px"
                    icon={<Image width="18px" height="18px" src={SaveIcon} />}
                  />
                  <IconButton
                    variant="outline"
                    width="40px"
                    height="40px"
                    marginBlockEnd="14px"
                    icon={<Image width="18px" height="18px" src={HeartIcon} />}
                  />
                </Flex>
              </SlideFade>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
