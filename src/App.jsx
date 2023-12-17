import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CreateNotePage from "./pages/CreateNotePage";
import NotFoundPage from "./pages/NotFoundPage";
import ArchivedPage from "./pages/ArchivedPage";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:noteId" element={<DetailPage />} />
          <Route path="/notes/new" element={<CreateNotePage />} />
          <Route path="/archives" element={<ArchivedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
