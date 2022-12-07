import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";
import { DashSecretary } from "./pages/DashSecretary";
import StudyPrograms from "./pages/StudyPrograms";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootPage from "./pages/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/secretary",
        element: <DashSecretary />,
      },
      {
        path: "/study-programs",
        element: <StudyPrograms />,
      },
      {
        path: "/courses",
        element: <StudyPrograms />,
      },
      {
        path: "/subjects",
        element: <StudyPrograms />,
      },
      {
        path: "/students",
        element: <StudyPrograms />,
      },
    ],
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
