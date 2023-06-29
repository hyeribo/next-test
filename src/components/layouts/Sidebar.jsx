import React from "react";
import { Menu, theme } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { useTabStore } from "@/store/useTabStore";

const items = [
  {
    key: "ScreenA",
    label: "Screen 1",
    icon: <UserOutlined />,
  },
  {
    key: "ScreenB",
    label: "Screen B",
    icon: <UserOutlined />,
  },
  {
    key: "ScreenC",
    label: "Screen C",
    icon: <VideoCameraOutlined />,
    children: [
      { key: "ScreenC1", label: "Screen C1" },
      { key: "ScreenC2", label: "Screen C2" },
      {
        key: "ScreenC3",
        label: "Screen C3",
        children: [
          { key: "ScreenC31", label: "Screen C31" },
          { key: "ScreenC32", label: "Screen C32" },
          { key: "ScreenC33", label: "Screen C33" },
        ],
      },
    ],
  },
  {
    key: "ScreenD",
    label: "Screen D",
    icon: <UploadOutlined />,
  },
];

function Sidebar() {
  const { addTab } = useTabStore();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleClickMenu = (menu) => {
    const { keyPath } = menu;

    const menuPath = [...keyPath].reverse();
    const selectedMenu = menuPath.reduce((acc, key, i) => {
      return (i ? acc.children : acc).find((item) => item.key === key);
    }, items);
    console.log("selectedMenu=> ", selectedMenu);
    addTab({ key: selectedMenu.key, label: selectedMenu.label });
  };

  return (
    <aside className="w-[150px] h-full bg-blue-900">
      <Menu
        className="bg-blue-900"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={handleClickMenu}
      />
    </aside>
  );
}

export default Sidebar;
