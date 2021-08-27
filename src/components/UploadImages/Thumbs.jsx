import { Flex, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { FormContext } from './ShotFormContext'

export default function Thumbs() {
  const { data } = React.useContext(FormContext)
  const files = data.files.map(file => URL.createObjectURL(file))
  return (
    <Stack my="20px">
      <Image borderRadius="14px" objectFit="cover" src={files[0]} />
      <Flex
        gridTemplateColumns="repeat(auto-fill, minmax(260px, 1fr))"
        gridColumnGap={4}
      >
        {files?.slice(1, data.files?.length).map(file => (
          <Image
            borderRadius="8px"
            objectFit="cover"
            w="104px"
            h="104px"
            src={file}
          />
        ))}
      </Flex>
    </Stack>
  )
}
