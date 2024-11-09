import { VStack, Button, Box, Flex, Heading, Table, Text, Input } from "@chakra-ui/react";
import React from "react";
import { useRef, useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { HiUpload } from "react-icons/hi";
import { FaCloud, FaCloudSun, FaCloudRain, FaSun, FaSnowflake, FaWind } from "react-icons/fa";
import './Dashboard.css';

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

// Function to map weather conditions to icons
const getWeatherIcon = (weather: string) => {
  switch (weather.toLowerCase()) {
    case "sunny":
      return <FaSun size={24} color="#FFD700" />;
    case "rainy":
      return <FaCloudRain size={24} color="#00BFFF" />;
    case "cloudy":
      return <FaCloud size={24} color="#B0C4DE" />;
    case "snowy":
      return <FaSnowflake size={24} color="#ADD8E6" />;
    case "windy":
      return <FaWind size={24} color="#A9A9A9" />;
    case "semi_cloudy":
      return <FaCloudSun size={24} color="#B0C4DE" />
    default:
      return <FaSun size={24} color="#FFD700" />;
  }
};

const DashBoard: React.FC<{}> = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // State to store current date and time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

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

      {/* Table */}
      <Table.Root mt={4}>
        <Table.Header className="table-header">
          <Table.Row border={"1px white"}>
            <Table.ColumnHeader><Text>Flight</Text></Table.ColumnHeader>
            <Table.ColumnHeader><Text>Passengers</Text></Table.ColumnHeader>
            <Table.ColumnHeader><Text>Seats</Text></Table.ColumnHeader>
            <Table.ColumnHeader><Text>Cost</Text></Table.ColumnHeader>
            <Table.ColumnHeader><Text>Departure</Text></Table.ColumnHeader>
            <Table.ColumnHeader><Text>Arrival</Text></Table.ColumnHeader>
            <Table.ColumnHeader><Text>Weather</Text></Table.ColumnHeader>
            <Table.ColumnHeader><Text>Risk</Text></Table.ColumnHeader>
            <Table.ColumnHeader><Text>Status</Text></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        
        <Table.Body>
          {filteredData.map((data, idx) => (
            <Table.Row key={idx} className="table-row">
              <Table.Cell>{data.flight}</Table.Cell>
              <Table.Cell>{data.passengers}</Table.Cell>
              <Table.Cell>{data.seats}</Table.Cell>
              <Table.Cell>${data.cost}</Table.Cell>

              {/* Departure Time */}
              <Table.Cell className={data.status === "Delayed" ? "status-delayed" : ""}>
                {data.departure}
              </Table.Cell>

              {/* Arrival Time */}
              <Table.Cell className={data.status === "Completed" ? "status-completed" : ""}>
                {data.arrival}
              </Table.Cell>

              {/* Weather with temperature */}
              <Table.Cell>{data.weather}</Table.Cell>

              {/* Risk bar */}
              <Table.Cell display="flex" alignItems="center">
                {data.risk}%
                {/* Example of a simple progress bar */}
                <div style={{ width:"100px", marginLeft:"8px", backgroundColor:"#ccc", height:"6px", borderRadius:"4px"}}>
                  <div style={{ width:`${data.risk}%`, backgroundColor:data.risk >50?"red":"green", height:"100%", borderRadius:"4px"}}></div>
                </div>
              </Table.Cell>

              {/* Status with different colors or badges */}
              <Table.Cell>{data.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {/* Weather Widget - Positioned at the bottom right */}
      <Box className="weather-widget">
        {/* Display formatted date */}
        <Text fontSize="lg" color="gray.400">
          {currentTime.toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "short", day: "numeric" })}
        </Text>
        
        {/* Display formatted time */}
        <Text fontSize="2xl" fontWeight="bold" color="white">
          {currentTime.toLocaleTimeString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true })}
        </Text>

        {/* Weather Info */}
        <Flex alignItems="center" mt={2}>
          {getWeatherIcon("cloudy")}
          <Box ml={2}>
            <Text fontSize="lg" color="white">Cloudy 25°C</Text>
            <Text fontSize="sm" color="gray.400">rain chance -10%</Text>
          </Box>
        </Flex>
      </Box>
    </VStack>
  </Layout>
   );
};

export default DashBoard;
