import { VStack, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout/Layout";
import HistoryCard from "../components/history/HistoryCard";

const mockData: UploadHistory[] = [
  {
    title: "어쩔 수 없는 일정 변경 1",
    author: "user1",
    uploadDate: "2024-11-10 03:40",
    details: "무슨 무슨 사유로 무슨 무슨 업데이트 했고, 어쩌고 저쩌고",
    csv: "abc.csv",
  },
  {
    title: "어쩔 수 없는 일정 변경 2",
    author: "user2",
    uploadDate: "2024-11-10 03:40",
    details: "무슨 무슨 사유로 무슨 무슨 업데이트 했고, 어쩌고 저쩌고",
    csv: "abc.csv",
  },
  {
    title: "어쩔 수 없는 일정 변경 3",
    author: "user3",
    uploadDate: "2024-11-10 03:40",
    details: "무슨 무슨 사유로 무슨 무슨 업데이트 했고, 어쩌고 저쩌고",
    csv: "abc.csv",
  },
  {
    title: "어쩔 수 없는 일정 변경 4",
    author: "user4",
    uploadDate: "2024-11-10 03:40",
    details: "무슨 무슨 사유로 무슨 무슨 업데이트 했고, 어쩌고 저쩌고",
    csv: "abc.csv",
  },
];

const History: React.FC<{}> = () => {
  return (
    <Layout>
      <Flex>
        <Heading size={"3xl"}>Upload History</Heading>
      </Flex>
      <VStack w={"100%"} mt={"20px"} gap={6} className={"dark"}>
        {mockData.map((uploadHistory, idx) => {
          return <HistoryCard key={idx} {...uploadHistory} />;
        })}
      </VStack>
    </Layout>
  );
};

export default History;
