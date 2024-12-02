import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import FlightMap from "../components/map/FlightMap";
import { dummy } from "../config/config";
import { getSchedule } from "../api/schedule";

const Map: React.FC<{}> = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([dummy.schedule]);

  /*========================================================================*/

  useEffect(() => {
    getSchedule(setSchedules);

    const timer = setInterval(() => {
      getSchedule(setSchedules);
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  /*========================================================================*/

  return (
    <Layout>
      <Flex>
        <Heading size={"3xl"}>Flight Map</Heading>
      </Flex>
      <Container h={"70vh"}>
        <FlightMap schedules={schedules}></FlightMap>
      </Container>
    </Layout>
  );
};

export default Map;
