import React from 'react'
import Cards from './Cards'
import { Button, Flex, Spinner, TabPanel, TabPanels } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { getImages } from '../../../providers/PostsProvider'

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

const loadMoreBtn = callback => (
  <Flex py={3} align="center" justify="center">
    <Button onClick={callback}>Load more</Button>
  </Flex>
)

export default function Content() {
  const [page, setPage] = React.useState(1)
  const [allPost, setAllPost] = React.useState([])
  const { isLoading, data } = useQuery(['posts', page], () => getImages(page), {
    keepPreviousData: true,
    onSuccess: data => {
      setAllPost([...allPost, ...data.data])
    },
  })

  return (
    <TabPanels>
      <TabPanel px="0" mt="14px">
        {isLoading && spinner}
        {allPost && <Cards data={allPost} />}

        {!isLoading &&
          page !== data?.meta.last_page &&
          loadMoreBtn(() => {
            setPage(page + 1)
          })}
      </TabPanel>
    </TabPanels>
  )
}
