import { VStack, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout/Layout";
import { HiUpload } from "react-icons/hi";

const DashBoard: React.FC<{}> = () => {
  const hdandleImage = (file: File) => {
    console.log(file.name);
  };

  return (
    <Layout>
      <VStack mt={"10px"}>
        <Flex w={"90vw"} justifyContent={"space-between"}>
          <Heading>Boarding Table</Heading>
          <Button backgroundColor={"gray.600"}>
            <HiUpload /> Upload CSV
          </Button>
        </Flex>
      </VStack>
    </Layout>
  );
};

export default DashBoard;
