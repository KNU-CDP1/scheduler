import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout/Layout";
import FlightMap from "../components/map/FlightMap";

const Map: React.FC<{}> = () => {
  return (
    <Layout>
      <Flex>
        <Heading size={"3xl"}>Flight Map</Heading>
      </Flex>
      <Container h={"70vh"}>
        <FlightMap></FlightMap>
      </Container>
    </Layout>
  );
};

export default Map;
