import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from './pages/HomePage'
import CryptoPage from './pages/CryptoPage'
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
  path: '/',
  element: <RootLayout/>,
  errorElement: <Error/>,
  children: [
    {index: true, element: <HomePage/>},
    {path: ':cryptoId', element: <CryptoPage/>}
  ]
  }
])


function App() {
  return <RouterProvider router={router}/>
}

export default App;
