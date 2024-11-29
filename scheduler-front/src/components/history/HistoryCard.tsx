import { Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import React from "react";

const HistoryCard: React.FC<ScheduleHistory> = (history) => {
  return (
    <Card.Root w={"100%"} variant={"outline"}>
      <Card.Header>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Card.Title>{history.title}</Card.Title>
            <Card.Description>{history.uploadDate.toUTCString()}</Card.Description>
            <Card.Description>{history.author} 작성</Card.Description>
          </Box>
          <Button _hover={{ color: "red.200" }}>Download CSV</Button>
        </Flex>
      </Card.Header>
      <Card.Body>
        <Box>
          <Text>{history.details}</Text>
        </Box>
      </Card.Body>
    </Card.Root>
  );
};

export default HistoryCard;
