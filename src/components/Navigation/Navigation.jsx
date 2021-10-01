import { Flex, Spacer } from '@chakra-ui/react'

import React from 'react'
import AppLogo from '../header/AppLogo'
// import NavLinks from './NavLinks'
// import NavActions from './NavActions'

export default function Navigation() {
  return (
    <Flex
      h="80px"
      justify="space-between"
      align="center"
      paddingInline="6"
      borderBottomWidth="1px"
      borderBottom="gray.300"
    >
      <AppLogo></AppLogo>
    </Flex>
  )
}

// export default function Header() {
//   return (
//     <Flex
//       h="80px"
//       justify="space-between"
//       paddingInline="6"
//       borderBottomWidth="1px"
//       borderBottom="gray.300"
//     >
//       <NavLinks />
//       <Spacer />
//       <NavActions />
//     </Flex>
//   );
// }
