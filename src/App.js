import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnnouncementDetails from "./components/AnnouncementDetails/AnnouncementDetails";
import Company from "./components/CompanyProfile/Company";
import Contact from './components/Contact/Contact';
import AddAnnouncement from "./components/dashboard/AddAnnouncement/AddAnnouncement";
import AddService from "./components/dashboard/AddService/AddService";
import AddSlide from "./components/dashboard/AddSlide/AddSlide";
import AdminPanel from "./components/dashboard/AdminPanel/AdminPanel";
import MakeAdmin from "./components/dashboard/MakeAdmin/MakeAdmin";
import ManageAnnouncement from "./components/dashboard/ManageAnnouncement/ManageAnnouncement";
import ManageServices from "./components/dashboard/ManageServices/ManageServices";
import ManageSlide from "./components/dashboard/ManageSlide/ManageSlide";
import Home from "./components/home/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import Mission from "./components/Mission/Mission";
import Privacy from './components/Privacy/Privacy';
import PrivateRoute from "./components/Shared/protectedArea/PrivateRoute/PrivateRoute";
import Signin from "./components/Shared/protectedArea/Singin/Signin";
import Signup from "./components/Shared/protectedArea/Singup/Signup";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
function App() {
  return (
    <Box>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/job" element={<Jobs />} />
            <Route path="/company" element={<Company />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/announcementdetails/:announcementdetailsId" element={<AnnouncementDetails />} />
            <Route path="/adminpanel/*" element={<PrivateRoute> <AdminPanel /> </PrivateRoute>}>
              <Route path="makeAdmin" element={<MakeAdmin />} />
              <Route path="addservice" element={<AddService />} />
              <Route path="addannouncement" element={<AddAnnouncement />} />
              <Route path="addslide" element={<AddSlide />} />
              <Route path="manageslide" element={<ManageSlide />} />
              <Route path="manageservices" element={<ManageServices />} />
              <Route path="manageannouncement" element={<ManageAnnouncement />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Box>
  );
}

export default App;
