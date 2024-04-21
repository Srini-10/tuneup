import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import { Container } from "@mantine/core";
import Internship from "../pages/internship";

type Props = {};

const RoutesConfig = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/internship" element={<Internship />} />
    </Routes>
  );
};

export default RoutesConfig;
