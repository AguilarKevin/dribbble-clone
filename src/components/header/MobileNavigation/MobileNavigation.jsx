import React, { useState } from 'react'
import NavigationMenu from './NavigationMenu'
import NavigationToggleButton from './NavigationToggleButton'

export default function MobileNavigation() {
  const [navOpen, setNavOpen] = useState(false)

  document.body.style.overflow = navOpen ? 'hidden' : 'initial'

  return (
    <>
      <NavigationToggleButton navOpen={navOpen} setNavOpen={setNavOpen} />
      <NavigationMenu navOpen={navOpen} />
    </>
  )
}
