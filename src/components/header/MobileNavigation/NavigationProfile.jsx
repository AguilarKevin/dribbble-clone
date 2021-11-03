import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Flex, Text } from '@chakra-ui/layout'
import React, { useContext } from 'react'

import { UserContext } from '../../../UserContextProvider'

const profileLinks = [
  'Profile',
  'Work Preferences',
  'Go Pro',
  'My Boosted Shots',
  'My Likes',
  'My Collections',
  'Go Pro',
  'Account Settings',
]

export default function NavigationProfile() {
  const context = useContext(UserContext)

  return (
    <>
      <Flex alignItems="center" gridGap={6}>
        <Avatar src={''} name={'kevin'} />
        <Text fontWeight="bold" fontSize="17" letterSpacing="-0.03em">
          {context.user?.name}
        </Text>
      </Flex>
      <Flex flexDir="column" gridGap={6}>
        {profileLinks.map((link, index) => (
          <Text
            key={index}
            fontSize="17"
            textColor="gray.500"
            fontWeight="medium"
            letterSpacing="-0.03em"
          >
            {link}
          </Text>
        ))}
        <Text
          fontSize="17"
          textColor="purple.700"
          fontWeight="medium"
          letterSpacing="-0.03em"
          py="3"
          borderBlock="1px"
          borderColor="gray.300"
        >
          Get A free Designer Account
        </Text>

        <Button
          variant="ghost"
          fontSize="17"
          textColor="gray.500"
          fontWeight="medium"
          letterSpacing="-0.03em"
          justifyContent="left"
          px="0"
        >
          Sign Out
        </Button>
      </Flex>
    </>
  )
}
