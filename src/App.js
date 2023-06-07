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
import Notice from "./pages/product/Notice";
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
import Avatar from "./components/avatars/avatar";
import Badges from "./components/badges/Badges";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Dropdown from "./components/dropdown/Dropdown";
import Input from "./components/input/Input";
import Logincover from "./pages/logincover/Logincover";
import Uploadfile from "./components/uploadfile/Uploadfile";
import DropFileInput from "./components/uploadfile/DropFileInput";
import Loader from "./components/loader/Loader";
import Processbar from "./components/process/Processbar";
import Draftsx from "./components/draft/Mention.tsx";
import Draftjs from "./components/draft/Draft.jsx";
function App() {
  const currentUsers = true;

  const { darkMode } = useContext(DarkModeContext);
  const Layout = () => {
    return (
      <div className="flex overflow-x-hidden ">
        <Sidebar2 />
        <div className="flex-1 ">
          <Navbar></Navbar>
          <div className="h-[calc(100vh-85px)]  overflow-y-auto overflow-x-hidden ">
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
          path: "/toasts",
          element: <Notice></Notice>,
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
        {
          path: "/avatar",
          element: <Avatar></Avatar>,
        },
        {
          path: "/badges",
          element: <Badges></Badges>,
        },
        {
          path: "/breadcrumbs",
          element: <Breadcrumbs></Breadcrumbs>,
        },
        {
          path: "/dropdowns",
          element: <Dropdown></Dropdown>,
        },
        {
          path: "/inputs",
          element: <Input></Input>,
        },
        {
          path: "/uploadfile",
          element: <Uploadfile></Uploadfile>,
        },
        {
          path: "/loaders",
          element: <Loader></Loader>,
        },
        {
          path: "/process-bar",
          element: <Processbar></Processbar>,
        },
        {
          path: "/draft",
          element: <Draftsx></Draftsx>,
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
    {
      path: "/logincover",
      element: <Logincover></Logincover>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
