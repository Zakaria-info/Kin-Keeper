import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timeline/Timeline";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Stats from "../pages/stats/Stats";

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
      },
      {
        path:"/stats",
        element:<Stats/>
      }
    ],
    errorElement: <ErrorPage/>
  },
])
