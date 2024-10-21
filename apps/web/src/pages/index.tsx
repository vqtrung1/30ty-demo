import { Routes, Route } from "react-router-dom";
import Dashboard from "./homepage";
import React from "react";
import Header from "../components/organisms/header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}
