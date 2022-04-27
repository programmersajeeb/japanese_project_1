import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "./components/CompanyProfile/Company";
import AddProduct from "./components/dashboard/AddProduct/AddProduct";
import Dashboard from "./components/dashboard/Dashboard/Dashboard";
import MakeAdmin from "./components/dashboard/MakeAdmin/MakeAdmin";
import Home from "./components/home/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import Mission from "./components/Mission/Mission";
function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/job" element={<Jobs />} />
          <Route path="/company" element={<Company />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
					<Route path="makeAdmin" element={<MakeAdmin />} />
          <Route path="addproduct" element={<AddProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
