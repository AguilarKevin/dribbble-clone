import React from 'react'

import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

import { Divider, Flex, Heading, Stack, Text } from '@chakra-ui/layout'
import { Hide } from '@chakra-ui/media-query'
import AppLogo from './AppLogo'
import GoogleLoginButton from './GoogleLoginButton'

export default function SignInForm() {
  return (
    <Flex
      px="42px"
      py="12"
      flexDir="column"
      align={{ base: 'start', md: 'center' }}
      justify={{ base: 'start', md: 'end' }}
      w="full"
      h="100vh"
      gridGap="6"
    >
      <Hide above="md">
        <AppLogo />
      </Hide>

      <Flex
        w="full"
        h="100vh"
        flexDir={{ base: 'column', md: 'row' }}
        justify={{ md: 'end' }}
      >
        <Flex
          w={{ base: 'full', md: '55%' }}
          h={{ md: 'full' }}
          pb="6"
          pt={{ base: '4', md: '20' }}
          align="start"
          justify={{ base: 'start', md: 'center' }}
          gridGap="26px"
          flexDir="column"
        >
          <Heading as="h1" fontSize="24px">
            Sign in to Dribbble
          </Heading>

          <Flex>
            <GoogleLoginButton />
          </Flex>

          <Flex w="full" align="center" gridGap="2">
            <Divider />
            <Text fontSize="sm" color="gray.500">
              Or
            </Text>
            <Divider />
          </Flex>

          <Flex w="full" flexDir="column" gridGap="20px" pt="2">
            <Stack w="full">
              <Text fontWeight="bold" fontSize="14.5px">
                Username or Email Address
              </Text>
              <Input variant="filled" borderRadius="lg" />
            </Stack>

            <Stack w="full">
              <Flex justify="space-between">
                <Text fontWeight="bold" fontSize="14.5px">
                  Password
                </Text>
                <Text fontWeight="regular" color="purple.700" fontSize="14px">
                  Forgot password?
                </Text>
              </Flex>
              <Input variant="filled" borderRadius="lg" />
            </Stack>
            <Button
              bg="pink.500"
              color="white"
              w={{ base: 'full', md: '50%' }}
              borderRadius="lg"
              _hover={{ bg: 'pink.400' }}
            >
              <Text fontSize="sm">Sign In</Text>
            </Button>
          </Flex>
        </Flex>
        `
        <Flex fontSize="14px" justify="center" gridGap="4px">
          <Text>Not a member?</Text>
          <Text fontWeight="regular" color="purple.700">
            Sign up now
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
