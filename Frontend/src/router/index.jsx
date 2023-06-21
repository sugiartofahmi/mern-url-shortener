import { lazy } from "react";
const Home = lazy(() => import("@/components/pages/Home"));
const NotFound = lazy(() => import("@/components/pages/NotFound"));

import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
