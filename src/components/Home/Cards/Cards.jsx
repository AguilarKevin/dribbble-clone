import { Grid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

export default function Cards({ data }) {
  return (
    <Grid gridTemplateColumns="repeat(auto-fill, minmax(260px, 1fr))" gap={10}>
      {data.map(post => (
        <Card key={post.id} {...post} />
      ))}
    </Grid>
  )
}
