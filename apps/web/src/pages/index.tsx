import { Routes, Route } from "react-router-dom";
import Dashboard from "./homepage";
import React from "react";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}
