import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Testdata from "./pages/testdata/renderdata";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./pages/home/Home";
// import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModecontext";
import "./i18n/i18n.js";
import Products from "./pages/product/Product";
import Sidebar from "./components/sidebar/";
import Report from "./pages/report/Report";
import Sidebar2 from "./components/sidebar2";

function App() {
  const currentUsers = true;

  const { darkMode } = useContext(DarkModeContext);
  const Layout = () => {
    return (
      <div className="">
        <Sidebar />
        <div className="flex-1">
          <Navbar></Navbar>
        </div>
        {/* <div className="flex-6"> */}
        {/* <Outlet />   */}
        {/* </div> */}
        {/* <Rightbar /> */}
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
      ],
    },
    {
      path: "/",
      element: <Login />,
    },
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
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
