import React from "react";
import { Tabs } from "@chakra-ui/react";
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu";
import Layout from "../components/layout/Layout";
import StyledLink from "../components/common/StyledLink";

import AccountTabs from "../components/setting/tabs/Account";
import SettingTabs from "../components/setting/tabs/Setting";
import HistoryTabs from "../components/setting/tabs/History";

const Setting: React.FC<{}> = () => {
  return (
    <Layout>
      <Tabs.Root variant={"plain"} lazyMount unmountOnExit defaultValue={"account"}>
        <Tabs.List w={"100%"}>
          <Tabs.Trigger value={"account"}>
            <LuUser color={"white"} />
            <StyledLink>Account</StyledLink>
          </Tabs.Trigger>
          <Tabs.Trigger value={"setting"}>
            <LuCheckSquare color={"white"} />
            <StyledLink>Setting</StyledLink>
          </Tabs.Trigger>
          <Tabs.Trigger value={"history"}>
            <LuFolder color={"white"} />
            <StyledLink>History</StyledLink>
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value={"account"}>
          <AccountTabs />
        </Tabs.Content>
        <Tabs.Content value={"setting"}>
          <SettingTabs />
        </Tabs.Content>
        <Tabs.Content value={"history"}>
          <HistoryTabs />
        </Tabs.Content>
      </Tabs.Root>
    </Layout>
  );
};

export default Setting;
