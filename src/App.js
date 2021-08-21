import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation.jsx'

import Home from './components/Home/Home.jsx'

import UploadImages from './components/UploadImages/UploadImages.jsx'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="uploads/new" element={<UploadImages />} />
        </Routes>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
