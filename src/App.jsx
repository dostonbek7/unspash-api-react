import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Contact from './pages/Contact'
import Home from './pages/Home'
import ErrorPages from "./pages/ErrorPages";
import SinglePages from "./pages/SinglePages";

function App() {
  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPages/>,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "singlepages/:id",
          element: <SinglePages />,
        }
      ]
    },

  ]);
  return <RouterProvider router={roots} />;
}

export default App;