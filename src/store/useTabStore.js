import create from "zustand";
import { devtools } from "zustand/middleware";
import dynamic from "next/dynamic";
// import { immer } from "zustand/middleware/immer";

import ScreenA from "@/components/screens/ScreenA";

export const useTabStore = create((set, get) => ({
  tabs: [{ key: "ScreenA", label: "ScreenA", children: <ScreenA /> }],
  currentTabKey: "ScreenA",
  changeCurrentTab: (key) => {
    console.log("changeCurrentTab =====>", key);
    set((state) => ({
      ...state,
      currentTabKey: key,
    }));
  },
  addTab: ({ key, label }) => {
    const isDuplicated = get().tabs.findIndex((tab) => tab.key === key) > -1;
    if (isDuplicated) {
      return;
    }
    console.log("addTab =====>", key, label);
    const Component = dynamic(() => import(`@/components/screens/${key}`));
    set((state) => ({
      tabs: [
        ...state.tabs,
        {
          key,
          label,
          children: <Component />,
        },
      ],
      currentTabKey: key,
    }));
  },
  removeTab: ({ key }) => {
    const currentTabs = get().tabs;
    const targetTabIndex = currentTabs.findIndex((tab) => tab.key === key);
    if (targetTabIndex > -1) {
      console.log("removeTab =====>", key);
      const nextTabs = currentTabs.filter((tab) => tab.key !== key);
      set((state) => ({
        tabs: nextTabs,
        currentTabKey: nextTabs[nextTabs.length - 1].key,
      }));
    }
  },
}));
