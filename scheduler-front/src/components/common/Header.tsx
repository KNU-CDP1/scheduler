import { Link as LinkUI, Center, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC<{}> = () => {
  return (
    <Flex justifyContent={"space-between"} h={"50px"} background={"gray.600"}>
      <Center ml={"2%"}>
        <Heading size={"2xl"}>UAM Monitor</Heading>
      </Center>

      <HStack spaceX={10} mr={"4%"}>
        <LinkUI color={"white"} _hover={{ color: "red.emphasized" }}>
          <Link to="/">DashBoard</Link>
        </LinkUI>
        <LinkUI color={"white"} _hover={{ color: "red.emphasized" }}>
          <Link to="/map">Map</Link>
        </LinkUI>
        <LinkUI color={"white"} _hover={{ color: "red.emphasized" }}>
          <Link to="/history">History</Link>
        </LinkUI>
      </HStack>
    </Flex>
  );
};

export default Header;
