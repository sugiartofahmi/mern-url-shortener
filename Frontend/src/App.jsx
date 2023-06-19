import { Suspense, lazy } from "react";
import Router from "./router";
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ContentLayout = lazy(() => import("./layouts/ContentLayout"));
const Loading = lazy(() => import("./components/Loading"));
import Error from "./components/Error";
import { ErrorBoundary } from "react-error-boundary";
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <ContentLayout>
              <Router />
            </ContentLayout>
          </Suspense>
        </ErrorBoundary>
      </MainLayout>
    </Suspense>
  );
};

export default App;
