import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./component/Sidebar";
import GeneratedID from "./component/GeneratedData";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Homepage from "./component/Beranda";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Sidebar />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/generateIDCard" element={<GeneratedID />} />
            </Routes>
            <Footer />
          </Box>
        </Box>
      </Router>
    </>
  );
}
