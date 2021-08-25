import {
  Avatar,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SlideFade,
  Spacer,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../AppContextProvider'
import { getShot } from '../../providers/PostsProvider'

import HeartIcon from '../../assets/heart.svg'
import MessageIcon from '../../assets/message.svg'
import ShareIcon from '../../assets/share.svg'
import InfoIcon from '../../assets/info.svg'
import SaveIcon from '../../assets/save-folder.svg'

export default function ViewShotModal({ shotId }) {
  const [open, setOpen] = React.useState(true)
  const { api } = React.useContext(AppContext)
  const { isLoading, data } = useQuery(['get shot', shotId], () =>
    getShot(api, shotId)
  )
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Modal
      onClose={() => {
        setOpen(false)
        navigate('/shots')
      }}
      size="full"
      isOpen={open}
      scrollBehavior="inside"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent bg="transparent">
        <ModalCloseButton color="white" right="2px" top="2px" />
        <ModalHeader pb="20px"></ModalHeader>
        <ModalBody bg="white" borderTopLeftRadius="14px">
          {isLoading && spinner}
          {data && content(data.data)}
          {data && floatinButtons(data.data, onOpen)}
          {data && modalInfo(isOpen, onClose)}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const spinner = (
  <Flex py={3} align="center" justify="center">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="pink.500"
      size="xl"
    />
  </Flex>
)

const content = ({
  id,
  title,
  description,
  likes,
  views,
  user,
  media,
  tags,
}) => (
  <>
    <Flex maxWidth="60%" mx="auto" align="center" justify="center" mt="56px">
      <Avatar
        size="md"
        src={user.avatar}
        name={user.name}
        marginInlineEnd="12px"
      />
      <div>
        <Heading as="h3" textTransform="Capitalize" size="sm" mb="4px">
          {title}
        </Heading>
        <Flex fontSize="sm" textColor="gray.700" letterSpacing="tight">
          <Text marginInlineEnd="12px">{user.name}</Text>{' '}
          <Text marginInlineEnd="12px">• Follow •</Text>
          <Text color="pink.500">Hire me</Text>
        </Flex>
      </div>
      <Spacer />
      <Flex>
        <Button borderRadius="10px" fontSize="sm" bg="#efefef" mx="8px">
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

    <Image
      id="modal-imageview"
      width="60%"
      mx="auto"
      mt="44px"
      borderRadius="10px "
      src={`${media[0].domain}${media[0].path}`}
    />

    <Text mt="54px" width="60%" mx="auto" fontSize="xl" lineHeight="1.6">
      {description}
    </Text>
  </>
)

const floatinButtons = ({ user }, onOpen) => (
  <Flex
    flexDirection="column"
    align="center"
    position="absolute"
    top="84px"
    right="34px"
  >
    <Avatar
      width="40px"
      height="40px"
      src={user.avatar}
      name={user.name}
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
      onClick={onOpen}
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
)

const modalInfo = (isOpen, onClose) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Shot Details</ModalHeader>
      <ModalCloseButton />
      <ModalBody></ModalBody>
    </ModalContent>
  </Modal>
)
