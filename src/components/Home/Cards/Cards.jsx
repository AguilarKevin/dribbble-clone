import { Grid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import { useQuery } from 'react-query'
import ky from 'ky'
import { AppContext } from '../../../AppContextProvider'

export default function Cards() {
  const { api } = React.useContext(AppContext)
  const { isLoading, data } = useQuery(['posts', api], () => getImages(api))

  return isLoading ? (
    'Loading...'
  ) : (
    <Grid gridTemplateColumns="repeat(auto-fill, minmax(260px, 1fr))" gap={10}>
      {data.map(post => {
        return <Card {...post} />
      })}
    </Grid>
  )
}

async function getImages(api) {
  console.log(api)
  const { data } = await ky(`${api.url}/uploads`, {
    headers: {
      Authorization: api.token,
    },
  }).json()

  return data
}
