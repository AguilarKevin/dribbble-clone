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
            image={item.image}
            likes={item.likes}
            views={item.views}
            username="nerdify"
            tag="team"
            avatar="https://cdn.dribbble.com/users/6395846/avatars/mini/f8c70deab558ca91b520afb34601979a.png?1605804828"
          />
        )
      })}
    </Grid>
  )
}

async function getImages() {
  const data = await ky('https://clone-dribbble-api.herokuapp.com/api/posts', {
    headers: {
      Authorization: 'Bearer H93gMy7rFtkecUpFBRLSgtKEPD1llrS83GHuW1yP',
    },
  }).json()
  console.log(data.data)
  return data.data
}
