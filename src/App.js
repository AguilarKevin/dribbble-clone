import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import ShotsPage from './pages/Shots/index'
import Page404 from './pages/404'
import SignInPage from './pages/signin'
import Shot from './pages/Shots/Shot'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Routes>
          <Route path="/" element={<ShotsPage />}>
            <Route path="/shots/:id" element={<Shot />} />
          </Route>
        </Routes>
        <Route path="/session/new" element={<SignInPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </ChakraProvider>
  )
}
