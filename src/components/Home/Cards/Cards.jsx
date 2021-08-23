import { Grid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import { useQuery } from 'react-query'
import ky from 'ky'

export default function Cards() {
  const { isLoading, error, data } = useQuery('posts', getImages)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Grid gridTemplateColumns="repeat(auto-fill, minmax(260px, 1fr))" gap={10}>
      {data.map(item => {
        return (
          <Card
            key={item.id}
            image={item.image}
            likes={item.likes}
            views={item.views}
            username={item.user.name}
            tag={item.user.tag}
            avatar={item.user.avatar}
          />
        )
      })}
    </Grid>
  )
}

async function getImages() {
  const data = await ky('http://localhost:8000/api/uploads', {
    headers: {
      Authorization: 'Bearer H93gMy7rFtkecUpFBRLSgtKEPD1llrS83GHuW1yP',
    },
  }).json()

  return data.data
}
