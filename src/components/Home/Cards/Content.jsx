import React from 'react'
import Cards from './Cards'
import {
  Button,
  Center,
  Flex,
  Spinner,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { AppContext } from '../../../AppContextProvider'
import { getImages } from '../../../providers/PostsProvider'

export default function Content() {
  const { api } = React.useContext(AppContext)
  const [page, setPage] = React.useState(1)
  const [allPost, setAllPost] = React.useState([])
  const { isLoading, data } = useQuery(['posts', api, page], () =>
    getImages(api, page)
  )

  return (
    <TabPanels>
      <TabPanel px="0" mt="14px">
        {allPost && <Cards data={allPost} />}
        {isLoading && (
          <Flex py={3} align="center" justify="center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="pink.500"
              size="xl"
            />
          </Flex>
        )}
        {!isLoading && data && page !== data?.meta.last_page && (
          <Flex py={3} align="center" justify="center">
            <Button
              onClick={() => {
                console.log(`state: ${page}`)
                console.log(`alldata: ${allPost}`)
                setAllPost([...allPost, ...data?.data])
                setPage(page + 1)
              }}
            >
              Load more
            </Button>
          </Flex>
        )}
      </TabPanel>
    </TabPanels>
  )
}
