import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import ShotsPage from './pages/shots'
import Page404 from './pages/404'
import SignInPage from './pages/signin'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<ShotsPage />}></Route>
        <Route path="/session/new" element={<SignInPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </ChakraProvider>
  )
}
