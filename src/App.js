import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'
import ShotsPage from './pages/shots'
import Page404 from './pages/404'
import SignInPage from './pages/signin'

export default function App() {
  const postsQueryClient = new QueryClient()

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={postsQueryClient}>
        <Routes>
          <Route path="/" element={<ShotsPage />}></Route>
          <Route path="/session/new" element={<SignInPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </QueryClientProvider>
    </ChakraProvider>
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
