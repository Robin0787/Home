import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./home/Home.tsx";
import { lazy, Suspense } from "react";
import PageLoader from "./components/PageLoader/PageLoader.tsx";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components
const Home = lazy(() => import("./home/Home.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Home />
      </Suspense>
    ),
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
