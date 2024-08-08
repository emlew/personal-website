import { Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@/layouts";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<></>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
