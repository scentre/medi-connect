import React from "react";
import type { PathRouteProps } from "react-router-dom";

const Home = React.lazy(() => import("~/lib/pages/home"));
const About = React.lazy(() => import("~/lib/pages/about"));
const Contact = React.lazy(() => import("~/lib/pages/contact"));

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: "/dashboard",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
