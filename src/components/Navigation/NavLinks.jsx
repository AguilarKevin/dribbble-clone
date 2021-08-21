import { Flex, Image } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';
import React from 'react';
import NavLink from './NavLink';

export default function NavLinks() {
  return (
    <Flex align="center">
      <Image src={Logo} alt="dribble logo" marginInlineEnd="8" />
      <NavLink>Inspiration</NavLink>
      <NavLink>Find Work</NavLink>
      <NavLink>Learn Design</NavLink>
      <NavLink>Go Pro</NavLink>
      <NavLink>Hire Designers</NavLink>
    </Flex>
  );
}
