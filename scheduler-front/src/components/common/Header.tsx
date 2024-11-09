import { Center, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";

const Header: React.FC<{}> = () => {
  return (
    <Flex justifyContent={"space-between"} h={"50px"} background={"gray.600"}>
      <Center ml={"2%"}>
        <Heading size={"2xl"}>UAM Monitor</Heading>
      </Center>

      <HStack spaceX={10} mr={"4%"}>
        <StyledLink>
          <Link to="/">DashBoard</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/map">Map</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/history">History</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/setting">Setting</Link>
        </StyledLink>
      </HStack>
    </Flex>
  );
};

export default Header;
