import { Routes, Route } from "react-router";
import { Layout } from "./components/layouts/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("/");
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout page={page} />}>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
