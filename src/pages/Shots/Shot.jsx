import { useDisclosure, Hide, Show } from '@chakra-ui/react'

// import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import fetchGraphQL from '../../FetchGraphQL.js'
import MobileShotModal from '../../components/MobileShotModal'
import ShotModal from '../../components/ShotModal'

export default function Shot() {
  const location = useLocation()

  const navigate = useNavigate()

  const [data, setData] = useState(null)
  const [currentMedia, setCurrentMedia] = useState(0)

  useEffect(() => {
    fetchGraphQL(`
		query Shot{
			shot(id: ${location.pathname.replace('/shots/', '')}){
				id
				title
				description
				saves
				views
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
				tags{
					name
					slug
				}
			}
		}
	`)
      .then(response => {
        setData(response.data.shot)
      })
      .catch(error => {
        console.error(error)
      })
  }, [location.pathname])

  const { onOpenModalInfo } = useDisclosure()

  return (
    <>
      <Hide above="md">
        <MobileShotModal
          {...{
            data,
            navigate,
            currentMedia,
            setCurrentMedia,
            onOpenModalInfo,
          }}
        />
      </Hide>
      <Show above="md">
        <ShotModal
          {...{
            data,
            navigate,
            currentMedia,
            setCurrentMedia,
            onOpenModalInfo,
          }}
        />
      </Show>
    </>
  )
}
