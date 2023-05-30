import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Videos from '~/pages/Videos.jsx'
import NotFounds from '~/pages/NotFounds.jsx'
import Root from '~/pages/Root.jsx'
import Home from '~/pages/Home.jsx'
import VideoDetail from '~/components/VideoDetail.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFounds />,
      children: [
        { index: true, element: <Home /> },
        { path: '/videos', element: <Videos /> },
        { path: '/videos/:videoid', element: <VideoDetail /> },
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  )
}

export default App
