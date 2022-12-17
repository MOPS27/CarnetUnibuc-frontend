import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";
import { DashSecretary } from "./pages/DashSecretary";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import RootPage from "./pages/templates/RootPage";
import CoursesPage from "./pages/secretary-pages/CoursesPage";
import CourseStudentsPage from "./pages/secretary-pages/CourseStudentsPage";

import StudyProgramsPage from "./pages/secretary-pages/StudyProgramsPage";
import SubjectsPage from "./pages/secretary-pages/SubjectsPage";
import StudentsPage from "./pages/secretary-pages/StudentsPage";
import StudentPage from "./pages/StudentPage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route element={<RootPage />}>
        <Route index element={<DashSecretary />} />
        <Route path="secretary" element={<DashSecretary />} />
        <Route path="study-programs" element={<StudyProgramsPage />} />
        <Route path="courses">
          <Route index element={<CoursesPage />} />
          <Route path=":courseId">
            <Route path="students" element={<CourseStudentsPage />} />
            <Route path="*" element={<Navigate to="../students" replace={true} />} />
            <Route index element={<Navigate to="./students" replace={true} />} />
          </Route>
        </Route>
        <Route path="subjects" element={<SubjectsPage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="student">
          <Route index element={<StudentPage />} />
          <Route path=":studentId" element={<StudentPage />} />
        </Route>
        <Route path="*" element={<Navigate to="../" replace={true} />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
