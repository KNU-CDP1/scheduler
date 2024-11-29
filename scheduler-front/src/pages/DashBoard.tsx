import { VStack, Flex, Heading, Box, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import DashBoardTable from "../components/dashboard/DashBoardTable";
import WeatherWidget from "../components/dashboard/WeatherWidget";
import "./Dashboard.css";
import { dummy } from "../config/config";
import { getSchedule } from "../api/schedule";
import FileUploadModal from "../components/dashboard/FileUploadModal";

const DashBoard: React.FC<{}> = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([dummy.schedule]);
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);

  /*========================================================================*/

  useEffect(() => {
    getSchedule(setSchedules);
  }, []);

  /*========================================================================*/

  return (
    <Layout>
      <VStack>
        <Flex w={"100%"} justifyContent={"space-between"}>
          <Heading size={"3xl"}>Dashboard</Heading>
          <Box>
            <Button onClick={() => setUploadModalOpen(true)}>CSV Upload</Button>
            <FileUploadModal isOpen={uploadModalOpen} onClose={() => setUploadModalOpen(false)} />
          </Box>
        </Flex>
        <DashBoardTable schedules={schedules} />
        <WeatherWidget />
      </VStack>
    </Layout>
  );
};

export default DashBoard;
