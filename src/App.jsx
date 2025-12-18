import { Routes, Route, useLocation } from "react-router";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";
import { UsersPage } from "./pages/UsersPage/UsersPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
function App() {
  const location = useLocation();
  const [localValue, setLocalValue] = useLocalStorage("linkPath", "");
  const [page, setPage] = useState(localValue || "/");

  useEffect(() => {
    setPage(location.pathname);
    setLocalValue(location.pathname);
  }, [location.pathname, setLocalValue]);

  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout page={page} />
            </RequireAuth>
          }
        >
          <Route index element={<HomePage />}></Route>
          <Route path="users" element={<UsersPage />}></Route>
          <Route path={`users/:userId`} element={<UserProfilePage />}></Route>
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
