import { Flex, Input, Textarea } from '@chakra-ui/react'
import { useContext } from 'react'
import { FormContext } from './ShotFormContext'

export default function ShotForm({ children }) {
  const { inputTitleRef, inputDescRef } = useContext(FormContext)

  return (
    <Flex
      py="45"
      mx="auto"
      maxWidth="55%"
      direction="column"
      align="center"
      gridRowGap="14px"
    >
      <Input
        px="0"
        variant="ghost"
        fontWeight="bold"
        fontSize="3xl"
        placeholder="give me a name"
        ref={inputTitleRef}
      />
      {children}
      <Textarea
        px="0"
        variant="ghost"
        fontSize="2xl"
        h="250px"
        resize="none"
        placeholder="Write what went into this shot, and anything else you’d like to mention"
        ref={inputDescRef}
      />
    </Flex>
  )
}
