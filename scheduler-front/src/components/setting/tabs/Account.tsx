import { Box, VStack, Card, Stat, Flex } from "@chakra-ui/react";
import React from "react";

const Account: React.FC<{}> = () => {
  return (
    <Box w={"100%"}>
      <VStack w={"100%"} mt={"10px"} gap={6} className={"dark"}>
        <Card.Root w={"100%"} variant={"outline"}>
          <Card.Header>
            <Card.Title>Account Info</Card.Title>
            <Card.Description>현재 접속한 사용자의 정보입니다.</Card.Description>
          </Card.Header>
          <Card.Body>
            <VStack gap={3} divideStyle={"solid"}>
              <Flex w={"100%"}>
                <Stat.Root>
                  <Stat.Label>UserName</Stat.Label>
                  <Stat.ValueText>Example User</Stat.ValueText>
                </Stat.Root>
                <Stat.Root>
                  <Stat.Label>권한</Stat.Label>
                  <Stat.ValueText>게스트</Stat.ValueText>
                </Stat.Root>
              </Flex>
              <Flex w={"100%"}>
                <Stat.Root>
                  <Stat.Label>접속 클라이언트</Stat.Label>
                  <Stat.ValueText>Google Chrome</Stat.ValueText>
                </Stat.Root>
                <Stat.Root>
                  <Stat.Label>접속 아이피</Stat.Label>
                  <Stat.ValueText>123.123.123.123</Stat.ValueText>
                </Stat.Root>
              </Flex>
            </VStack>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Box>
  );
};

export default Account;
