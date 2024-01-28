import { Routes, Route, Outlet } from "react-router-dom";
import { AuthModule } from "../auth/AuthModule";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route element={<Outlet />}>
        <Route path="/auth/*" element={<AuthModule />} />
      </Route>
    </Routes>
  );
};
