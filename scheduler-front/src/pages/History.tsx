import { VStack, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import HistoryCard from "../components/history/HistoryCard";
import { getScheduleHistory } from "../api/scheduleHistory";
import { dummy } from "../config/config";

const History: React.FC<{}> = () => {
  const [scheduleHistory, setScheduleHistory] = useState<ScheduleHistory[]>([dummy.scheduleHistory]);
  /*========================================================================*/

  useEffect(() => {
    getScheduleHistory(setScheduleHistory);
  }, []);

  /*========================================================================*/
  return (
    <Layout>
      <Flex>
        <Heading size={"3xl"}>Upload History</Heading>
      </Flex>
      <VStack w={"100%"} mt={"20px"} gap={6} className={"dark"}>
        {scheduleHistory.map((history, idx) => {
          return <HistoryCard key={idx} {...history} />;
        })}
      </VStack>
    </Layout>
  );
};

export default History;
