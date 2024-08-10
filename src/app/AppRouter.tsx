import { Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@/layouts";
import { ProjectsPage, StartPage } from "@/pages";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<StartPage/>} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
