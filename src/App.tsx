import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";
import { DashSecretary } from "./pages/DashSecretary";
import StudyPrograms from "./pages/secretary-pages/StudyProgramsPage";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootPage from "./pages/templates/RootPage";
import CoursesPage from "./pages/secretary-pages/CoursesPage";
import CourseStudentsPage from "./pages/secretary-pages/CourseStudentsPage";

import StudyProgramsPage from "./pages/secretary-pages/StudyProgramsPage";
import SubjectsPage from "./pages/secretary-pages/SubjectsPage";
import StudentsPage from "./pages/secretary-pages/StudentsPage";
import StudentPage from "./pages/StudentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <DashSecretary />,
      },
      {
        path: "/secretary",
        element: <DashSecretary />,
      },
      {
        path: "/study-programs",
        element: <StudyProgramsPage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/courses/:courseId/students",
        element: <CourseStudentsPage />,
      },
      {
        path: "/subjects",
        element: <SubjectsPage />,
      },
      {
        path: "/students",
        element: <StudentsPage />,
      },
      {
        path: "/student/:studentId",
        element: <StudentPage />,
      },
      {
        path: "/student",
        element: <StudentPage />,
      },
    ],
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
