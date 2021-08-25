import { Grid } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Card from './Card'

export default function Cards({ data }) {
  const location = useLocation()

  return (
    <Grid gridTemplateColumns="repeat(auto-fill, minmax(260px, 1fr))" gap={10}>
      {data.map(post => (
        <Link
          key={post.id}
          to={{
            pathname: `/shots/${post.id}`,
            state: { background: location },
          }}
        >
          <Card {...post} />
        </Link>
      ))}
    </Grid>
  )
}
