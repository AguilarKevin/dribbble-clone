import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation.jsx'

import Home from './components/Home/Home.jsx'

import UploadImages from './components/UploadImages/UploadImages.jsx'

import { QueryClient, QueryClientProvider } from 'react-query'
import { AppContext } from './AppContextProvider.js'

const userQueryClient = new QueryClient()

const postsQueryClient = new QueryClient()

const body = (
  <>
    <QueryClientProvider client={userQueryClient}>
      <Navigation />
    </QueryClientProvider>

    <QueryClientProvider client={postsQueryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="uploads/new" element={<UploadImages />} />
      </Routes>
    </QueryClientProvider>
  </>
)

const app = (
  <AppContext.Provider
    value={{
      api: {
        url: 'http://127.0.0.1:8000/api',
        token: 'Bearer H93gMy7rFtkecUpFBRLSgtKEPD1llrS83GHuW1yP',
      },
    }}
  >
    <ChakraProvider theme={theme}>{body}</ChakraProvider>
  </AppContext.Provider>
)

export default function App() {
  return app
}
