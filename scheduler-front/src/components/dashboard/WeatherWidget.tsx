import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { FaCloud, FaCloudSun, FaCloudRain, FaSun, FaSnowflake, FaWind } from "react-icons/fa";

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

const WeatherWidget: React.FC<{}> = () => {
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

    return (
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
    );
};

export default WeatherWidget;