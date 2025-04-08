import React from "react";
import { Layout as AntdLayout, Menu } from "antd";
import { Link } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
import { useLogout } from "../hooks/useLogout";

export const Layout = ({ children }) => {
  const handleLogout = useLogout();

  const menuItems = [
    {
      key: "contact-table",
      label: <Link to="/contact-table">Contact table</Link>,
    },
    {
      key: "contact-form",
      label: <Link to="/contact-form">Contact form</Link>,
    },
    {
      key: "logout",
      label: <div>Logout</div>,
      onClick: handleLogout,
      style: { marginLeft: "auto" },
    },
  ];

  return (
    <div>
      <AntdLayout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <Menu
            style={{
              display: "flex",
              justifyContent: "start",
              width: "100%",
            }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[]}
            items={menuItems}
          />
          <Content
            style={{
              padding: "0",
              marginTop: 64,
              width: "100%",
            }}
          >
            <div
              style={{
                padding: "2rem",
                minHeight: "calc(100vh -64px)",
                width: "100%",
              }}
            >
              {children}
            </div>
          </Content>
        </Header>
      </AntdLayout>
    </div>
  );
};
