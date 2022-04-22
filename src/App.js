import React from "react";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Stories from "./pages/Stories";
import Pricing from "./pages/Pricing";

import Layout from "./components/Layout";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="stories" element={<Stories />} />
          <Route path="pricing" element={<Pricing />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
