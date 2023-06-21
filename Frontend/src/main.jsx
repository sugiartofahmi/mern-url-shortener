import router from "@/router";
import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
const Loading = lazy(() => import("@/components/atoms/Loading"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
