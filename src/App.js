import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home/Home';
import Mission from './components/Mission/Mission';
import Jobs from './components/Jobs/Jobs';
import Company from './components/CompanyProfile/Company';
import Dashboard from './components/dashboard/Dashboard/Dashboard';
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
					<Route path="dashboard" element={  <Dashboard /> } />
				</Routes>
			</BrowserRouter>
		</Box>
	);
}

export default App
