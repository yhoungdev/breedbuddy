import React from "react";
import { Tabs } from "expo-router";

const TabRouters = [
  {
    title: "index",
  },
  {
    title: "Profile",
  },
  {
    title: "Marketplace",
  },
  {
    title: "Messages",
  },
];

const RootTabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {TabRouters.map((tab, index) => (
        <Tabs.Screen name={tab.title} key={index} />
      ))}
    </Tabs>
  );
};

export default RootTabLayout;
