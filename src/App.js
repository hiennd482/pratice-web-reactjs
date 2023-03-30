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
import { Home } from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModecontext";
import "./i18n/i18n.js";

function App() {
  const currentUsers = true;

  const { darkMode } = useContext(DarkModeContext);
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar></Navbar>
        <div style={{ display: "flex" }}>
          <Leftbar></Leftbar>
          <div style={{ flex: 6 }}>
            <Outlet></Outlet>
          </div>
          <Rightbar></Rightbar>
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUsers) {
      return <Navigate to="/login"></Navigate>;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout></Layout>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Profile/:id",
          element: <Profile></Profile>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
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
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
