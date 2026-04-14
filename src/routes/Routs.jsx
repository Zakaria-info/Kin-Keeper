import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timeline/Timeline";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path:"/",
    Component: MainLayout,
    children:[
      {
        index: true,
        element: <Homepage/>,
      },
      {
        path: "/timeline",
        element: <Timeline/>
      }
    ],
    errorElement: <ErrorPage/>
  },
])
