import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Link } from '@chakra-ui/layout'

export default function Navigation({ links }) {
  return (
    <Flex ml="8" align="center" gridColumnGap="8">
      {links.map(link => (
        <Link
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

Navigation.propTypes = {
  links: PropTypes.array,
}
