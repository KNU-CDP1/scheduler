import { VStack, Button, Flex, Heading, Table, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout/Layout";
import { HiUpload } from "react-icons/hi";

const mockData: DashBoard[] = [
  {
    flight: "SKY101",
    passengers: 2,
    seats: 4,
    cost: 80,
    departure: "9:00 AM",
    arrival: "10:30 AM",
    weather: "Sunny",
    risk: 20,
    status: "Completed",
  },
  {
    flight: "SKY102",
    passengers: 5,
    seats: 6,
    cost: 250,
    departure: "11:00 AM",
    arrival: "12:30 PM",
    weather: "Rainy",
    risk: 40,
    status: "InFlight",
  },
  {
    flight: "SKY103",
    passengers: 4,
    seats: 4,
    cost: 150,
    departure: "1:00 PM",
    arrival: "2:30 PM",
    weather: "Sunny",
    risk: 10,
    status: "Delayed",
  },
  {
    flight: "SKY104",
    passengers: 1,
    seats: 4,
    cost: 40,
    departure: "3:00 PM",
    arrival: "4:00 PM",
    weather: "Windy",
    risk: 30,
    status: "Delayed",
  },
  {
    flight: "SKY105",
    passengers: 3,
    seats: 3,
    cost: 150,
    departure: "5:00 PM",
    arrival: "6:00 PM",
    weather: "Cloudy",
    risk: 50,
    status: "Cancelled",
  },
];

const DashBoard: React.FC<{}> = () => {
  const handleImage = (file: File) => {
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
        {/*================================ Table Example ==============================*/}
        <Table.Root>
          <Table.Header>
            <Table.Row background={"blackAlpha.300"} border={"1px white"}>
              <Table.ColumnHeader>
                <Text color={"white"}>Flight</Text>
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <Text color={"white"}>Passengers</Text>
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {mockData.map((data, idx) => {
              return (
                <Table.Row background={"blackAlpha.300"}>
                  <Table.Cell>{data.flight}</Table.Cell>
                  <Table.Cell>{data.cost}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </VStack>
    </Layout>
  );
};

export default DashBoard;
