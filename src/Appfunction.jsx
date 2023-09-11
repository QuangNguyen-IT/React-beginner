import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WrapperLayout } from "./components/WrapperLayout";
import Blog from "./pages/blogs/Blogs";
import Home from "./pages/homes/Home";

function Appfunction() {
  return (
    <div className="main-layout">
      <BrowserRouter>
        <Routes>
          <Route element={<WrapperLayout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Appfunction;
