import { Grid } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { getImages } from '../../../providers/PostsProvider'
import Card from './Card'
import { AppContext } from '../../../AppContextProvider'

export default function Cards() {
  const { api } = React.useContext(AppContext)
  const { isLoading, data } = useQuery(['posts', api], () => getImages(api))

  return isLoading ? (
    'loading...'
  ) : (
    <Grid gridTemplateColumns="repeat(auto-fill, minmax(260px, 1fr))" gap={10}>
      {data.map(post => (
        <Card key={post.id} {...post} />
      ))}
    </Grid>
  )
}
