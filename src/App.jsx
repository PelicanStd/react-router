import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
const router = createBrowserRouter([
  {
  path:'/',
  element: <p className={"text-6xl text-center mt-8"}>Home</p>,
    errorElement: <p className={"text-6xl text-center mt-8"}>Not Found 😅</p>
  },
  {
    path:'/videos',
    element: <p className={"text-6xl text-center"}>Videos</p>
  }
])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
