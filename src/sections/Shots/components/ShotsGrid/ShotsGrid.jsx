import { Grid } from '@chakra-ui/layout'
import React, { Suspense, useEffect, useState } from 'react'

import fetchGraphQL from '../../../../FetchGraphQL.js'

import ShotCard from './ShotCard'

const ShotsQuery = `
  query Shots{
    shots{
      id
      title
      description
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
    }
  }
`

export default function ShotsGrid() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchGraphQL(ShotsQuery)
      .then(response => {
        setPosts(response.data.shots)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <Suspense fallback={'Loading...'}>
      <Grid
        px={{ base: '2', md: '14' }}
        gridTemplateColumns="repeat(auto-fill, minmax(260px, 1fr))"
        gridGap={8}
      >
        {posts.map(post => (
          <React.Fragment key={post.id}>
            <ShotCard {...post} />
          </React.Fragment>
        ))}
      </Grid>
    </Suspense>
  )
}
