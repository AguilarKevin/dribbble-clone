import React, { useState } from 'react'
import NavigationMenu from './NavigationMenu'
import NavigationToggleButton from './NavigationToggleButton'

export default function MobileNavigation() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <NavigationToggleButton navOpen={navOpen} setNavOpen={setNavOpen} />
      <NavigationMenu navOpen={navOpen} />
    </>
  )
}
