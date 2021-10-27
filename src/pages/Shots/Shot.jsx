import { useDisclosure, Hide, Show } from '@chakra-ui/react'

// import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import fetchGraphQL from '../../FetchGraphQL.js'
import MobileShotModal from '../../components/MobileShotModal'
import ShotModal from '../../components/ShotModal'

export default function Shot() {
  const location = useLocation()

  const navigate = useNavigate()

  const [data, setData] = useState(null)
  const [currentMedia, setCurrentMedia] = useState(0)

  useEffect(() => {
    fetchGraphQL(`
		query Shot{
			shot(id: ${location.pathname.replace('/shots/', '')}){
				id
				title
				description
				saves
				views
				media {
					domain
					path
					mimetype
				}
				user {
					name
					avatar
					tag
				}
				tags{
					name
					slug
				}
			}
		}
	`)
      .then(response => {
        setData(response.data.shot)
      })
      .catch(error => {
        console.error(error)
      })
  }, [location.pathname])

  const { onOpenModalInfo } = useDisclosure()

  return (
    <>
      <Hide above="md">
        <MobileShotModal
          {...{
            data,
            navigate,
            currentMedia,
            setCurrentMedia,
            onOpenModalInfo,
          }}
        />
      </Hide>
      <Show above="md">
        <ShotModal
          {...{
            data,
            navigate,
            currentMedia,
            setCurrentMedia,
            onOpenModalInfo,
          }}
        />
      </Show>
    </>
  )
}

// const Content = ({ data }) => (
//   <>
//     <Flex
//       maxWidth="60%"
//       mx="auto"
//       align="center"
//       justify="center"
//       mt={{ md: '56px' }}
//     >
//       <Avatar
//         size="md"
//         src={data.user.avatar}
//         name={data.user.name}
//         marginInlineEnd="12px"
//       />
//       <div>
//         <Text as="h3" textTransform="capitalize" size="sm" mb="4px">
//           {data.title} xd
//         </Text>
//         <Flex fontSize="sm" textColor="gray.700" letterSpacing="tight">
//           <Text marginInlineEnd="12px">{data.user.name}</Text>{' '}
//           <Text marginInlineEnd="12px">• Follow •</Text>
//           <Text color="pink.500">Hire me</Text>
//         </Flex>
//       </div>
//       <Spacer />
//       <Flex>
//         <Button borderRadius="10px" fontSize="sm" bg="#efefef" mx="8px">
//           Save
//         </Button>
//         <Button
//           fontSize="sm"
//           bg="#efefef"
//           borderRadius="10px"
//           leftIcon={<Image src={HeartIcon} />}
//         >
//           Like
//         </Button>
//       </Flex>
//     </Flex>

//     <Image
//       id="modal-imageview"
//       width="60%"
//       mx="auto"
//       mt="44px"
//       borderRadius="10px "
//       src={`${data.media[0].domain}${data.media[0].path}`}
//     />

//     <Flex
//       mx="auto"
//       width="60%"
//       overflow="auto"
//       justify="center"
//       gridColumnGap="20px"
//       mt="20px"
//     >
//       {data.media.map(file => (
//         <Image
//           id="modal-imageview"
//           height="54px"
//           minWidth="68px"
//           objectFit="cover"
//           borderRadius="4px"
//           src={`${file.domain}${file.path}`}
//         />
//       ))}
//     </Flex>

//     <Text mt="54px" width="60%" mx="auto" fontSize="xl" lineHeight="1.6">
//       {data.description}
//     </Text>
//   </>
// )

// const FloatinButtons = ({ user, onOpenModalInfo }) => (
//   <Flex
//     flexDirection="column"
//     align="center"
//     position="absolute"
//     top="84px"
//     right="34px"
//   >
//     {console.log(user)}
//     <Avatar
//       width="40px"
//       height="40px"
//       src={user.avatar}
//       name={user.name}
//       marginBlockEnd="14px"
//     />
//     <IconButton
//       variant="outline"
//       width="40px"
//       height="40px"
//       marginBlockEnd="14px"
//       icon={<Image width="18px" height="18px" src={MessageIcon} />}
//     />

//     <IconButton
//       variant="outline"
//       width="40px"
//       height="40px"
//       marginBlockEnd="14px"
//       icon={<Image width="18px" height="18px" src={ShareIcon} />}
//     />

//     <IconButton
//       variant="outline"
//       width="40px"
//       height="40px"
//       marginBlockEnd="14px"
//       onClick={onOpenModalInfo}
//       icon={<Image width="18px" height="18px" src={InfoIcon} />}
//     />
//     <SlideFade in={true} offsetY="-20px">
//       <Flex flexDirection="column">
//         <IconButton
//           variant="outline"
//           width="40px"
//           height="40px"
//           marginBlockEnd="14px"
//           icon={<Image width="18px" height="18px" src={SaveIcon} />}
//         />
//         <IconButton
//           variant="outline"
//           width="40px"
//           height="40px"
//           marginBlockEnd="14px"
//           icon={<Image width="18px" height="18px" src={HeartIcon} />}
//         />
//       </Flex>
//     </SlideFade>
//   </Flex>
// )

// const ModalInfo = ({
//   likes,
//   saves,
//   views,
//   created_at,
//   tags,
//   isOpen,
//   onClose,
// }) => (
//   <Modal isOpen={isOpen} onClose={onClose}>
//     <ModalOverlay />
//     <ModalContent>
//       <ModalHeader mx="38px" mt="38px" pb="2">
//         <Heading as="h3" fontSize="22px">
//           Shot Details
//         </Heading>
//       </ModalHeader>
//       <ModalCloseButton
//         color="gray.500"
//         insetBlockStart="20px"
//         insetInlineEnd="20px"
//       />
//       <ModalBody mx="38px" mb="38px" letterSpacing="tight">
//         <Text fontWeight="regular" fontSize="15px" color="gray.600">
//           Posted {created_at}
//         </Text>
//         <Flex mt="24px" gridColumnGap="24px">
//           <Stack>
//             <Text fontSize="15px">Views</Text>
//             <Text fontSize="24px">{views}</Text>
//           </Stack>

//           <Stack>
//             <Text fontSize="15px">Saves</Text>
//             <Text fontSize="24px">{25}</Text>
//           </Stack>

//           <Stack>
//             <Text fontSize="15px">Likes</Text>
//             <Text fontSize="24px">{125}</Text>
//           </Stack>

//           <Stack>
//             <Text fontSize="15px">Comments</Text>
//             <Text fontSize="24px">{16}</Text>
//           </Stack>
//         </Flex>
//         {tags?.length > 0 && (
//           <>
//             <Text mt="24px" fontSize="15px">
//               Tags
//             </Text>
//             <Flex mt="8px" gridGap="10px" flexWrap="wrap">
//               {tags.map(tag => (
//                 <Link to={`/tags/${tag.slug}`}>
//                   <Button
//                     size="sm"
//                     fontWeight="regular"
//                     fontSize="12px"
//                     variant="outline"
//                   >
//                     {tag.name}
//                   </Button>
//                 </Link>
//               ))}
//             </Flex>
//           </>
//         )}
//       </ModalBody>
//     </ModalContent>
//   </Modal>
// )
