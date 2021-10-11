import React from 'react'
import { Flex, Link } from '@chakra-ui/layout'

const links = [
  'Inspiration',
  'Find Work',
  'Learn Design',
  'Go Pro',
  'Hire Designers',
]

export default function Navigation() {
  return (
    <Flex ml="8" align="center" gridColumnGap="8">
      {links.map(link => (
        <Link
          key={link}
          fontSize="sm"
          color="#566"
          fontWeight="semibold"
          _hover={{
            color: 'pink.500',
          }}
        >
          {link}
        </Link>
      ))}
    </Flex>
  )
}
