import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Flex, Spacer, Stack, Text } from '@chakra-ui/layout'
import { Collapse } from '@chakra-ui/transition'
import React from 'react'
import ColorPalleteIcon from '../../../assets/color-pallete.svg'

import AdobeXDIcon from '../../../assets/xd.svg'
import PhotoshopIcon from '../../../assets/photoshop.svg'
import IllustratorIcon from '../../../assets/illustrator.svg'
import FigmaIcon from '../../../assets/figma.svg'
import SketchIcon from '../../../assets/sketch.svg'
import UnsplashIcon from '../../../assets/unsplash.svg'
import InvisionIcon from '../../../assets/invision.svg'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Button } from '@chakra-ui/button'
export default function FiltersCollapseContainer({ isMenuOpen }) {
  return (
    <Collapse in={isMenuOpen} animateOpacity>
      <Flex flexDir={{ base: 'column', md: 'row' }} w="full" gridGap="8" py="4">
        <Stack flex={{ base: '0', md: '1' }}>
          <Text fontWeight="semibold" fontSize="sm">
            Tags
          </Text>
          <InputGroup w="full">
            <InputLeftElement children={<SearchIcon color="gray.500" />} />
            <Input
              borderRadius="10px"
              bg="#eee"
              w="full"
              border="none"
              fontSize="14px"
              placeholder="Search"
            />
          </InputGroup>
        </Stack>

        <Stack flex={{ base: '0', md: '1' }}>
          <Text fontWeight="semibold" fontSize="sm">
            Color
          </Text>

          <InputGroup w="full">
            <InputLeftElement
              children={
                <Image src={ColorPalleteIcon} zIndex="-1" color="gray.500" />
              }
            />
            <Input
              borderRadius="10px"
              bg="#eee"
              w="full"
              border="none"
              fontSize="14px"
              placeholder="Enter hex or select"
            />
          </InputGroup>
        </Stack>

        <Stack flex={{ base: '0', md: '1' }}>
          <Text fontWeight="semibold" fontSize="sm">
            Made With
          </Text>

          <Menu>
            <MenuButton
              variant="outline"
              as={Button}
              textAlign="left"
              fontWeight="regular"
              textColor="gray.500"
              borderRadius="10px"
              fontSize="14px"
              rightIcon={<ChevronDownIcon />}
            >
              All Apps
            </MenuButton>
            <MenuList>
              <MenuItem>All Apps</MenuItem>
              <MenuItem icon={<Image textColor="gray.600" src={AdobeXDIcon} />}>
                Adobe XD
              </MenuItem>
              <MenuItem icon={<Image textColor="gray.600" src={FigmaIcon} />}>
                Figma
              </MenuItem>
              <MenuItem icon={<Image textColor="gray.600" src={SketchIcon} />}>
                Sketch
              </MenuItem>
              <MenuItem
                icon={
                  <Image
                    w="16px"
                    h="16px"
                    textColor="gray.600"
                    src={UnsplashIcon}
                  />
                }
              >
                Unsplash
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>

        <Stack flex={{ base: '0', md: '1' }}>
          <Text fontWeight="semibold" fontSize="sm">
            Downloads
          </Text>
          <Menu>
            <MenuButton
              variant="outline"
              as={Button}
              textAlign="left"
              fontWeight="regular"
              textColor="gray.500"
              borderRadius="10px"
              fontSize="14px"
              rightIcon={<ChevronDownIcon />}
            >
              All Shots
            </MenuButton>
            <MenuList>
              <MenuItem>All Shots</MenuItem>
              <MenuItem
                icon={<Image textColor="gray.600" src={PhotoshopIcon} />}
              >
                Adobe Photoshop
              </MenuItem>
              <MenuItem
                icon={<Image textColor="gray.600" src={IllustratorIcon} />}
              >
                Adobe Illustrator
              </MenuItem>
              <MenuItem icon={<Image textColor="gray.600" src={AdobeXDIcon} />}>
                Adobe XD
              </MenuItem>
              <MenuItem icon={<Image textColor="gray.600" src={FigmaIcon} />}>
                Figma
              </MenuItem>
              <MenuItem
                icon={<Image textColor="gray.600" src={InvisionIcon} />}
              >
                Invision Studio
              </MenuItem>
              <MenuItem icon={<Image textColor="gray.600" src={SketchIcon} />}>
                Sketch
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>
    </Collapse>
  )
}
