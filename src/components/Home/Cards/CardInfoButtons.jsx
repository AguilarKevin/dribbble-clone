import { ViewIcon } from '@chakra-ui/icons'
import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import HeartIcon from '../../../assets/heart.svg'
import CardInfoButton from './CardInfoButton'

export default function CardInfoButtons() {
  return (
    <Flex align="center">
      <CardInfoButton leftIcon={<Image textColor="gray.600" src={HeartIcon} />}>
        211
      </CardInfoButton>
      <CardInfoButton leftIcon={<ViewIcon />}>11.4K</CardInfoButton>
    </Flex>
  )
}
