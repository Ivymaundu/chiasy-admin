import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes: React.FC = () => {
  const auth = localStorage.getItem("token");

  if (auth === null || auth === undefined) {
    return <Navigate to="/" />;
  }


  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
