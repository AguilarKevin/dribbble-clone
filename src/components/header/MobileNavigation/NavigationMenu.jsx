import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion'
import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Stack, Text } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import React from 'react'

const navMenuItems = [
  {
    title: 'Inspiration',
    options: [
      'Explore Design Work',
      'New & Noteworthy',
      'Playoffs',
      'Blog',
      'Weekly Warmup',
    ],
  },
  {
    title: 'Find Work',
    options: [
      'Job Board',
      'Freelance Projects',
      'Want freelance design projects',
    ],
  },
  { title: 'Learn Design' },
  { title: 'Go Pro' },
  {
    title: 'Hire Designers',
    options: [
      'About Dribbble Hiring',
      'Designer Search',
      'List my Job Openning',
      'Post a Freelance Project',
    ],
  },
]

export default function NavigationMenu({ navOpen }) {
  return (
    <Stack
      bg="white"
      d={navOpen ? 'block' : 'none'}
      pos="absolute"
      top="60px"
      w="full"
      h="calc(100vh - 60px)"
      overflow="auto"
      insetX="0"
      px="6"
      py="6"
      zIndex="10"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" />}
        />
        <Input
          bg="#eee"
          borderRadius="lg"
          _focus={{
            borderColor: 'pink.300',
            borderWidth: '1px',
            bg: 'transparent',
            boxShadow: '0px 0px 1px 3px #FFE8E8',
          }}
          variant="filled"
          type="text"
          placeholder="Search"
        />
      </InputGroup>

      <Accordion allowMultiple>
        {navMenuItems.map(item =>
          item.options ? (
            <AccordionItem border="none">
              <h2>
                <AccordionButton px="0" py="3" _focus={{ boxShadow: 'none' }}>
                  <Text
                    color="gray.600"
                    flex="1"
                    fontSize="18px"
                    fontWeight="semibold"
                    textAlign="left"
                  >
                    {item.title}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                d="flex"
                flexDir="column"
                gridGap="20px"
                px="0"
                py="4px"
                borderLeft="1px"
                borderColor="gray.200"
              >
                {item.options?.map(option => (
                  <Link to={`/${option}`}>
                    <Text px="8" py="3" color="gray.500" fontSize="md">
                      {option}
                    </Text>
                  </Link>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ) : (
            <>
              <Link to={`/${item.title}`}>
                <Box>
                  <Text
                    color="gray.600"
                    flex="1"
                    fontSize="18px"
                    fontWeight="semibold"
                    px="0"
                    py="3"
                    textAlign="left"
                  >
                    {item.title}
                  </Text>
                </Box>
              </Link>
            </>
          )
        )}
      </Accordion>
    </Stack>
  )
}
