import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./components/Common/SamplePage/SamplePage";
import Company from "./components/CompanyProfile/Company";
import AddAnnouncement from "./components/dashboard/AddAnnouncement/AddAnnouncement";
import AddService from "./components/dashboard/AddService/AddService";
import AddSlide from "./components/dashboard/AddSlide/AddSlide";
import Dashboard from "./components/dashboard/Dashboard/Dashboard";
import MakeAdmin from "./components/dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./components/dashboard/ManageServices/ManageServices";
import ManageSlide from "./components/dashboard/ManageSlide/ManageSlide";
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
          <Route path="/samplepage" element={<SamplePage />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="addservice" element={<AddService />} />
            <Route path="addannouncement" element={<AddAnnouncement />} />
            <Route path="addslide" element={<AddSlide />} />
            <Route path="manageslide" element={<ManageSlide />} />
            <Route path="manageservices" element={<ManageServices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
