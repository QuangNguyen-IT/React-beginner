import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
export const WrapperLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="content-page">
        <Outlet></Outlet>
      </div>
    </>
  );
};
