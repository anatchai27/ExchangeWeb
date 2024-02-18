import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { PagesRoutes } from "../routes/PagesRoutes";

export const Content = () => {
  return (
    <>
      <Routes>
        {PagesRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </>
  );
  //  <ContentRoutes />;
};
