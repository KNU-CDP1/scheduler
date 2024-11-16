import React, { PropsWithChildren } from "react";
import { Link as LinkUI } from "@chakra-ui/react";

const StyledLink: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LinkUI color={"white"} _hover={{ color: "red.emphasized" }}>
      {children}
    </LinkUI>
  );
};

export default StyledLink;
