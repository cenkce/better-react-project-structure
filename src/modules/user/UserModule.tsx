import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AuthLogin = lazy(() => import("../auth-login/AuthLogin"));

export const AuthModule = () => {
  return (
    <Routes>
      <Route
        path={`/profile`}
        element={
          <Suspense fallback={"Loading"}>
            <AuthLogin />
          </Suspense>
        }
      />
    </Routes>
  );
};
