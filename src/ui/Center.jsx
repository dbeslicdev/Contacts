import { Row } from "antd";
import React from "react";

export const Center = ({ children }) => {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      {children}
    </Row>
  );
};
