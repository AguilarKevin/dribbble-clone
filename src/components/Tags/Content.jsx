import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import Cards from '../Home/Cards/Cards'

export default function Content({ isLoading, shots }) {
  return (
    <div px="0" mt="14px">
      {isLoading && spinner}
      {shots && <Cards data={shots} />}

      {/* {!isLoading &&
        page !== data?.meta.last_page &&
        loadMoreBtn(() => {
          setPage(page + 1)
        })} */}
    </div>
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
