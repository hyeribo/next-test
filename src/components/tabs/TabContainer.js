import React, { useRef, useState, useCallback, useMemo } from "react";
import { Tabs } from "antd";
import {
  CloseOutlined,
  ColumnWidthOutlined,
  ColumnHeightOutlined,
} from "@ant-design/icons";

import { useTabStore } from "@/store/useTabStore";

const TabContainer = () => {
  const tabStore = useTabStore();
  const { tabs, currentTabKey, changeCurrentTab } = tabStore;

  const [seperatedMode, setSeperatedMode] = useState("none"); // none, horizontal, vertical

  const contentViewClassName = useMemo(() => {
    const classNames = ["grid", "w-full", "h-full"];
    if (seperatedMode === "horizontal") {
      classNames.push(`grid-cols-${tabs.length} gap-3`);
    } else if (seperatedMode === "vertical") {
      classNames.push(`grid-rows-${tabs.length}  gap-3`);
    }
    return classNames.join(" ");
  }, [seperatedMode, tabs]);

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: "New Tab",
      children: "Content of new Tab",
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  const handleClickSeperate = (mode) => {
    console.log("mode", mode);
    setSeperatedMode(mode);
  };

  const handleClickTab = (tab) => {
    console.log("tab!");
    changeCurrentTab(tab.key);
  };

  const handleClickRemove = (e) => {
    e.stopPropagation();
    console.log("remove!");
  };

  const renderContent = useCallback(
    (tab) => {
      const { key, children } = tab;
      const Component = children;
      return (
        <div
          key={tab.key}
          className="bg-white"
          style={
            tab.key !== currentTabKey && seperatedMode === "none"
              ? { display: "none" }
              : {}
          }
        >
          {Component}
        </div>
      );
    },
    [currentTabKey, seperatedMode]
  );

  return (
    <div className="h-full flex flex-col">
      <div className="h-10 bg-gray-300 p-1 pb-0 flex flex-row justify-between">
        <div className="w-full h-full flex gap-1">
          {tabs.map((tab) => {
            return (
              <div
                key={tab.key}
                className="bg-white ph-3 h-full min-w-[100px] inline-flex justify-center items-center rounded-tl-[10px] rounded-tr-[10px] gap-x-2 cursor-pointer"
                onClick={() => handleClickTab(tab)}
              >
                <span className="text-sm">{tab.label}</span>
                <CloseOutlined
                  className="text-sm"
                  onClick={handleClickRemove}
                />
              </div>
            );
          })}
        </div>
        <div className="h-full pb-1 inline-flex gap-2 items-center">
          <ColumnWidthOutlined
            onClick={() => handleClickSeperate("horizontal")}
          />
          <ColumnHeightOutlined
            onClick={() => handleClickSeperate("vertical")}
          />
        </div>
      </div>
      <div className="grow p-2 bg-zinc-600">
        <div className={contentViewClassName}>{tabs.map(renderContent)}</div>
      </div>
    </div>
  );
};

export default TabContainer;
