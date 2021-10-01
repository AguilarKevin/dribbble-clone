import { Flex, Heading, Text } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <Flex
      h="calc(100vh - 60px)"
      justify="center"
      align="center"
      p="8"
      flexDir="column"
      gridGap="14px"
    >
      <Heading fontSize="2xl">Whoops, that page is gone</Heading>
      <Text align="center" color="#777">
        While you’re here, feast your eyes upon these tantalizing popular
        designs matching the color
      </Text>

      <Text fontSize="128pt">404</Text>

      <Link to="/">Goto Homepage</Link>
    </Flex>
  )
}
