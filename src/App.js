import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation.jsx'

import Home from './components/Home/Home.jsx'

import UploadImages from './components/UploadImages/UploadImages.jsx'

import { QueryClient, QueryClientProvider } from 'react-query'
import { AppContext } from './AppContextProvider.js'
import ViewShotModal from './components/ViewShotModal/ViewShotModal.jsx'
import Tags from './components/Tags/Tags.jsx'

export default function App() {
  const userQueryClient = new QueryClient()
  const postsQueryClient = new QueryClient()

  let location = useLocation()

  return (
    <AppContext.Provider
      value={{
        api: {
          url: 'http://127.0.0.1:8000/api',
          token: 'Bearer 5S4HGdMZ75giz7nUBGt1pNrua2iaHxbFkUkNLLUK',
        },
      }}
    >
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={userQueryClient}>
          <Navigation />
        </QueryClientProvider>

        <QueryClientProvider client={postsQueryClient}>
          <Routes>
            <Route exact path="/">
              <Navigate to="/shots" />
              <Route path="uploads/new" element={<UploadImages />} />
              <Route path="/shots" element={<Home />}>
                <Route
                  path="/:id"
                  element={
                    <ViewShotModal
                      shotId={location.pathname.replace('/shots/', '')}
                    />
                  }
                />
              </Route>
              <Route
                path="/tags/:tag"
                element={<Tags tag={location.pathname.replace('/tags/', '')} />}
              />
            </Route>
          </Routes>
        </QueryClientProvider>
      </ChakraProvider>
    </AppContext.Provider>
  )
}
