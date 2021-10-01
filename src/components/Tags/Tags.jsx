import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from './Content'

import { useQuery } from 'react-query'
import { AppContext } from '../../AppContextProvider'
import { getShotsByTag } from '../../providers/PostsProvider'
export default function Tags({ tag }) {
  const { api } = React.useContext(AppContext)
  // const [page, setPage] = React.useState(1)
  // const [allPost, setAllPost] = React.useState([])
  const { isLoading, data } = useQuery(
    ['ShotsByTag', tag],
    () => getShotsByTag(api, tag)
    // {
    //   keepPreviousData: true,
    //   onSuccess: data => {
    //     setAllPost([...allPost, ...data.shots])
    //   },
    // }
  )

  return (
    <React.Fragment>
      <Stack mx="16" mt="16" gridRowGap="24px">
        <Flex direction="column" align="center" p="10">
          <Heading fontSize="5xl" as="h1" mb="24px" textTransform="capitalize">
            {data?.name}
          </Heading>
          <Text color="gray.600">
            inspirational designs, illustrations, and graphic elements from the
            world’s best designers.
          </Text>
          <Text color="gray.600">
            {' '}
            Want more inspiration? Browse our search results...
          </Text>
        </Flex>

        <Content shots={data?.shots} isLoading={isLoading} />
      </Stack>
      <Outlet />
    </React.Fragment>
  )
}
