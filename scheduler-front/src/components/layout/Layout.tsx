import { Box, Container } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import Header from "../common/Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box w={"100vw"} minH={"100vh"} background={"black"} color={"white"}>
      <Header />
      <Container w={"80vw"} mt={"50px"}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
