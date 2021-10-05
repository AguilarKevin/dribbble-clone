import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './components/header/Header'
import ShotsPage from './pages/shots'
import Page404 from './pages/404'

export default function App() {
  const userQueryClient = new QueryClient()
  const postsQueryClient = new QueryClient()

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={userQueryClient}>
        <Header />
      </QueryClientProvider>

      <QueryClientProvider client={postsQueryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

const AppRouter = () => {
  // let location = useLocation()
  return (
    <Routes>
      <Route path="/" element={<ShotsPage />}></Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

// const AppRouter = () => {
//   let location = useLocation()
//   return (
//     <Routes>
//       <Route exact path="/">
//         <Navigate to="/shots" />
//         <Route path="uploads/new" element={<UploadImages />} />
//         <Route path="/shots" element={<Home />}>
//           <Route
//             path="/:id"
//             element={
//               <ViewShotModal
//                 shotId={location.pathname.replace('/shots/', '')}
//               />
//             }
//           />
//         </Route>
//         <Route
//           path="/tags/:tag"
//           element={<Tags tag={location.pathname.replace('/tags/', '')} />}
//         />
//       </Route>
//     </Routes>
//   )
// }

// async function getToken() {
//   let token = localStorage.getItem('api_token')

//   if (!token) {
//     const formData = new FormData()
//     formData.append('name', 'Kevin Aguilar')
//     formData.append('email', 'kevin8@gmail.com')
//     formData.append('password', '1234')

//     const response = await ky
//       .post(`http://127.0.0.1:8000/api/register`, {
//         body: formData,
//       })
//       .json()
//       .then(console.log)
//       .catch(console.error)
//     console.log('api token:', response)
//     if (response.access_token) {
//       localStorage.setItem('api_token', response.access_token)
//       token = response.access_token
//     }
//   }
//   console.log('token:', token)
//   return token
// }
