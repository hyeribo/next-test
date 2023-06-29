import React, { useState } from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";

// const { Header, Content, Footer, Sider } = Layout;

import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import Footer from "@/components/layouts/Footer";

function AppLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <div className="bg-gray-100 h-[100vh] flex flex-col">
        <Header />
        <div className="grow flex flex-row">
          <Sidebar />
          <main className="grow">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
