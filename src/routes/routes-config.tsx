import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import { Container } from "@mantine/core";

type Props = {};

const RoutesConfig = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesConfig;
