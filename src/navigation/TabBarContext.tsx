import React, {createContext, useContext, useState, ReactNode} from "react";

type TabBarContextType = {
  visible: boolean;
  showTabBar: () => void;
  hideTabBar: () => void;
};

// 创建TabBar的上下文
const TabBarContext = createContext<TabBarContextType>({
  visible: true,
  showTabBar: () => {},
  hideTabBar: () => {},
});

// 提供TabBar的上下文
export const TabBarProvider = ({children}: {children: ReactNode}) => {
  const [visible, setVisible] = useState(true);

  const showTabBar = () => setVisible(true); // 显示TabBar
  const hideTabBar = () => setVisible(false); // 隐藏TabBar

  return <TabBarContext.Provider value={{visible, showTabBar, hideTabBar}}>{children}</TabBarContext.Provider>;
};

export const useTabBar = () => useContext(TabBarContext);
