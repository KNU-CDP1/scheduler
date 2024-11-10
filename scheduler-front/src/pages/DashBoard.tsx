import { VStack, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import DTable from "../components/dashboard/DTable";
import WeatherWidget from "../components/dashboard/WeatherWidget";
import { HiUpload } from "react-icons/hi";
import './Dashboard.css';

const mockData: FlightDataType[] = [
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
    status: "In Flight",
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
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Ref for the hidden file input element
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to handle file selection
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  // Function to trigger the hidden input when the button is clicked
  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Filter data based on selected filter and search query
  const filteredData = mockData.filter((data) => {
    let matchesFilter = true;

    // Apply filter logic for Scheduled button
    if (filter === 'Scheduled') {
      matchesFilter = ['Delayed', 'Cancelled', 'Scheduled'].includes(data.status);
    } else if (filter !== 'All') {
      matchesFilter = data.status === filter;
    }
    
    // Apply search query filter
    let matchesSearch = data.flight.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

   return (
   <Layout>
    <VStack className="dashboard-container">
      {/* Header */}
      <Flex className="dashboard-header">
        <Heading>Dashboard</Heading>
        <Button className="upload-button" onClick={triggerFileUpload}>
          <HiUpload /> Upload CSV
        </Button>
      </Flex>
      {/* Hidden File Input */}
      <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept=".csv"
          onChange={handleFileUpload}
        />

      {/* Filter Buttons and Search Bar */}
      <Flex className="filter-buttons" justifyContent="space-between" w="100%">
        {/* Filter Buttons */}
        <Flex gap={4}>
          <Button onClick={() => setFilter("All")} colorScheme={filter === 'All' ? 'teal' : 'gray'}>All Flights</Button>
          <Button onClick={() => setFilter("Scheduled")} colorScheme={filter === 'Scheduled' ? 'teal' : 'gray'}>Scheduled</Button>
          <Button onClick={() => setFilter("In Flight")} colorScheme={filter === 'In Flight' ? 'teal' : 'gray'}>In Flight</Button>
          <Button onClick={() => setFilter("Completed")} colorScheme={filter === 'Completed' ? 'teal' : 'gray'}>Completed</Button>
        </Flex>

        {/* Search Bar */}
        <Input 
            placeholder="Search for a flight" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="search-bar"
        />
      </Flex>

      {/*Table*/}
      <DTable flightData={filteredData} />

      {/*WeatherWidget*/}
      {<WeatherWidget />}

    </VStack>
  </Layout>
   );
};

export default DashBoard;
