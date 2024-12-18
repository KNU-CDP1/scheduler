import React from "react";
import "./App.css";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*======= Pages =======*/
import DashBoard from "./pages/DashBoard";
import Map from "./pages/Map";
import History from "./pages/History";
import Setting from "./pages/Setting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider value={defaultSystem}>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/history" element={<History />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
