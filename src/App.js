import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Testdata from "./pages/testdata/renderdata";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModecontext";
import "./i18n/i18n.js";
import Products from "./pages/product/Product";
import Report from "./pages/report/Report";
import Error from "./pages/error/404error";
import Slides from "./pages/slideshow";
import Sidebar2 from "./components/sidebar2";
import Fancyapp from "./pages/fancyapp/slideshow/Carouselfancy";
import Rightbar from "./components/rightbar/Rightbar";

import Scrollbar from "./pages/scroll/Scrollbar.jsx";
import Box from "./pages/fancyapp/box/Box";
import Video from "./pages/fancyapp/video/Video";
import Modals from "./components/modals/Modals";
import Tables from "./pages/tables/tables";
import Checkbox from "./components/checkbox/Checkbox";
import Pagin from "./components/pagination/Pagin";
import Pagin2 from "./components/Pagination2/example/Testpagin";
function App() {
  const currentUsers = true;

  const { darkMode } = useContext(DarkModeContext);
  const Layout = () => {
    return (
      <div className="flex overflow-x-hidden ">
        <Sidebar2 />
        <div className="flex-1 ">
          <Navbar></Navbar>
          <div className="h-[calc(100vh-85px)] overflow-y-auto overflow-x-hidden sobar">
            <Outlet />
          </div>
        </div>

        <div className="">{/* <Rightbar /> */}</div>
      </div>
    );
  };

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUsers) {
  //     return <Navigate to="/login"></Navigate>;
  //   }
  //   return children;
  // };
  const router = createBrowserRouter([
    {
      element: <Layout></Layout>,

      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/products",
          element: <Products></Products>,
        },
        {
          path: "/reports",
          element: <Report></Report>,
        },
        {
          path: "/modals",
          element: <Modals></Modals>,
        },
        {
          path: "/tables",
          element: <Tables></Tables>,
        },
        {
          path: "/checkbox",
          element: <Checkbox></Checkbox>,
        },
        {
          path: "/pagin",
          element: <Pagin></Pagin>,
        },
        {
          path: "/pagin2",
          element: <Pagin2></Pagin2>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    // {
    //   path: "/reports",
    //   element: <Report></Report>,
    // },
    // {
    //   path: "/home",
    //   element: <Home />,
    // },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/testdata",
      element: <Testdata></Testdata>,
    },
    {
      path: "/error",
      element: <Error></Error>,
    },
    {
      path: "/scrollbar",
      element: <Scrollbar></Scrollbar>,
    },
    {
      path: "/slides",
      element: <Slides></Slides>,
    },
    {
      path: "/fancyapps",
      element: <Fancyapp></Fancyapp>,
    },
    {
      path: "/fancybox",
      element: <Box></Box>,
    },
    {
      path: "/video",
      element: <Video></Video>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
