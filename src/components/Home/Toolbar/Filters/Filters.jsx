import { SearchIcon } from '@chakra-ui/icons';
import {
  Collapse,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  MenuItem,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import Filter from './Filter';
import FilterMenu from './FilterMenu';

import AdobeXDIcon from '../../../../assets/xd.svg';
import PhotoshopIcon from '../../../../assets/photoshop.svg';
import IllustratorIcon from '../../../../assets/illustrator.svg';
import FigmaIcon from '../../../../assets/figma.svg';
import SketchIcon from '../../../../assets/sketch.svg';
import UnsplashIcon from '../../../../assets/unsplash.svg';
import InvisionIcon from '../../../../assets/invision.svg';

export default function Filters({ isOpen }) {
  return (
    <Collapse in={isOpen}>
      <Flex pt="34px">
        <Filter title={'Tags'}>
          <InputGroup>
            <InputLeftElement
              children={<SearchIcon zIndex="-1" color="gray.500" />}
            />
            <Input
              borderRadius="10px"
              bg="#eee"
              border="none"
              fontSize="14px"
              placeholder="Search"
            />
          </InputGroup>
        </Filter>
        <Spacer />
        <Filter title={'Color'}>
          <Input
            borderRadius="10px"
            border="none"
            bg="#eee"
            fontSize="14px"
            placeholder="Enter the Hex or select"
          />
        </Filter>
        <Spacer />
        <Filter title={'Timeframe'}>
          <FilterMenu title={'Now'}>
            <MenuItem>Now</MenuItem>
            <MenuItem>This Past Week</MenuItem>
            <MenuItem>This Past Month</MenuItem>
            <MenuItem>This Past Year</MenuItem>
            <MenuItem>All Time</MenuItem>
          </FilterMenu>
        </Filter>
        <Spacer />
        <Filter title={'Made With'}>
          <FilterMenu title={'All Apps'}>
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
          </FilterMenu>
        </Filter>
        <Spacer />

        <Filter title={'Downloads'}>
          <FilterMenu title={'All Shots'}>
            <MenuItem>All Shots</MenuItem>
            <MenuItem icon={<Image textColor="gray.600" src={PhotoshopIcon} />}>
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
            <MenuItem icon={<Image textColor="gray.600" src={InvisionIcon} />}>
              Invision Studio
            </MenuItem>
            <MenuItem icon={<Image textColor="gray.600" src={SketchIcon} />}>
              Sketch
            </MenuItem>
          </FilterMenu>
        </Filter>
      </Flex>
    </Collapse>
  );
}
