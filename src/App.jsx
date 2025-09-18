import { Routes, Route, useLocation } from "react-router";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";
import { UsersPage } from "./pages/UsersPage/UsersPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const location = useLocation();
  const [localValue, setLocalValue] = useLocalStorage("linkPath", "");
  const [page, setPage] = useState(localValue || "/");

  useEffect(() => {
    setPage(location.pathname);
    setLocalValue(location.pathname);
  }, [location.pathname, setLocalValue]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout page={page} />}>
          <Route index element={<HomePage />}></Route>
          <Route path="users" element={<UsersPage />}></Route>
          <Route path={`users/:userId`} element={<UserProfilePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
