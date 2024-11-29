import { Table, VStack, Flex, Button, Input, HStack, Progress } from "@chakra-ui/react";
import React, { useState } from "react";

const DashBoardTable: React.FC<DashBoardTableProps> = ({ schedules }) => {
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  /*========================================================================*/

  const filteredData = (statusFilter: string, queryFilter: string): Schedule[] => {
    console.log(statusFilter, queryFilter);

    const filtered: Schedule[] = [];

    console.log("=====");

    for (const schedule of schedules) {
      if (queryFilter !== "" && !schedule.flightNumber.includes(queryFilter)) {
        continue;
      }
      console.log(schedule.status);

      if (statusFilter === "Scheduled") {
        if (schedule.status === "In Flight" || schedule.status === "Completed") {
          continue;
        }
      } else if (statusFilter !== "All" && schedule.status !== statusFilter) {
        continue;
      }

      filtered.push(schedule);
    }

    return filtered;
  };

  /*========================================================================*/

  return (
    <VStack w={"100%"}>
      <Flex justifyContent={"space-between"} w={"100%"}>
        <HStack gap={4}>
          <Button onClick={() => setFilter("All")} colorScheme={filter === "All" ? "teal" : "gray"}>
            All Flights
          </Button>
          <Button onClick={() => setFilter("Scheduled")} colorScheme={filter === "Scheduled" ? "teal" : "gray"}>
            Scheduled
          </Button>
          <Button onClick={() => setFilter("In Flight")} colorScheme={filter === "In Flight" ? "teal" : "gray"}>
            In Flight
          </Button>
          <Button onClick={() => setFilter("Completed")} colorScheme={filter === "Completed" ? "teal" : "gray"}>
            Completed
          </Button>
        </HStack>
        <Input
          maxW={"50%"}
          placeholder={"Search for a flight"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Flex>
      <Table.Root mt={4} color={"white"}>
        <Table.Header>
          <Table.Row border={"1px white"}>
            <ColumnHeader content={"Flight"} />
            {/* <ColumnHeader content={"Passengers"} />
            <ColumnHeader content={"Seats"} /> */}
            <ColumnHeader content={"Cost"} />
            <ColumnHeader content={"Departure"} />
            <ColumnHeader content={"Arrival"} />
            <ColumnHeader content={"Weather"} />
            <ColumnHeader content={"Risk"} />
            <ColumnHeader content={"Status"} />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredData(filter, query).map((data, idx) => (
            <Table.Row key={idx} color={"white"} {...(idx % 2 === 0 ? rowStyle.even : rowStyle.odd)}>
              <Table.Cell>{data.flightNumber}</Table.Cell>
              {/* <Table.Cell>{data.passengers}</Table.Cell>
              <Table.Cell>{data.seats}</Table.Cell> */}
              <Table.Cell>${data.cost}</Table.Cell>
              <Table.Cell className={data.status === "Delayed" ? "status-delayed" : ""}>
                {data.adjustedDeparture.toUTCString()}
              </Table.Cell>
              <Table.Cell className={data.status === "Completed" ? "status-completed" : ""}>
                {data.adjustedArrival.toUTCString()}
              </Table.Cell>
              <Table.Cell>{data.weather}</Table.Cell>
              <Table.Cell>
                <Progress.Root value={data.risk} w={"100%"} colorPalette={data.risk >= 50 ? "red" : "green"}>
                  <Progress.ValueText>{data.risk}%</Progress.ValueText>

                  <Progress.Track>
                    <Progress.Range />
                  </Progress.Track>
                </Progress.Root>
              </Table.Cell>

              <Table.Cell>{data.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </VStack>
  );
};

export default DashBoardTable;

/*================================================================================================*/

const rowStyle = {
  header: {
    bg: "#1f1f1f",
    color: "white",
    textAlign: "center",
  },
  content: {
    textAlign: "center",
  },
  even: {
    bg: "#2a2a2a",
    textAlign: "center",
  },
  odd: {
    bg: "#333333",
    textAlign: "center",
  },
};

const ColumnHeader: React.FC<{ content: string }> = ({ content }) => {
  return <Table.ColumnHeader {...rowStyle.header}>{content}</Table.ColumnHeader>;
};

// const ColumnCell: React.FC<{ content: string; isEven: boolean }> = ({ content, isEven }) => {
//   return <Table.Cell>{content}</Table.Cell>;
// };
