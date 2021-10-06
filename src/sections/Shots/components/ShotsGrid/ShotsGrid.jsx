import { Grid } from '@chakra-ui/layout'

import ky from 'ky'
import React, { useEffect, useState } from 'react'

import ShotCard from './ShotCard'

export default function ShotsGrid() {
  const [posts, setPosts] = useState([])
  // const [page, setPage] = useState(1)

  useEffect(() => {
    getPosts().then(posts => setPosts(posts.data))
  }, [])
  console.log(posts)

  return (
    <Grid
      px={{ base: '2', md: '14' }}
      gridTemplateColumns="repeat(auto-fill, minmax(260px, 1fr))"
      gridTemplateRows={{ base: '290px', md: 'auto' }}
      gap={8}
    >
      {posts.map(post => (
        <React.Fragment key={post.id}>
          <ShotCard {...post} />
        </React.Fragment>
      ))}
    </Grid>
  )
}

async function getPosts() {
  return await ky(`${process.env.REACT_APP_API_URL}/shots?page=${1}`).json()
}
