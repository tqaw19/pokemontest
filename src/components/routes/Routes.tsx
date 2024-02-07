import React from "react";
import { Route, Routes } from "react-router-dom";
import { Details, Home } from "@/components/pages";
import { Layout } from "@/components/layout";
import { DETAILS, HOME } from "@/contants/routes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={DETAILS} element={<Details />} />
      </Route>
    </Routes>
  );
};
