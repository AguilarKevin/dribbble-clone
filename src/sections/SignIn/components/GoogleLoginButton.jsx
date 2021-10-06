import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { useGoogleLogin } from 'react-google-login'

import GoogleLogo from '../../../assets/google.svg'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

export default function GoogleLoginButton() {
  const { signIn } = useGoogleLogin({
    onSuccess: res => {
      console.log(res.profileObj)
    },
    onFailure: res => {
      console.log(res)
    },
    accessType: 'online',
    clientId,
  })

  return (
    <Button
      h="40px"
      gridGap="6"
      py="2px"
      pr="2px"
      colorScheme="blue"
      borderRadius="4px"
      onClick={signIn}
    >
      <Text fontWeight="thin" fontSize="13px">
        Acceder con google
      </Text>
      <Flex
        bg="white"
        h="full"
        w="38px"
        borderTopRightRadius="2px"
        borderBottomRightRadius="2px"
        align="center"
        justify="center"
      >
        <Image width="18px" src={GoogleLogo} alt="dribble logo" />
      </Flex>
    </Button>
  )
}
