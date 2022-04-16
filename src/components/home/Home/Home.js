import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Announcements from '../Announcements/Announcements';
import Banner from '../banner/Banner/Banner';
import Luminous from '../luminous/Luminous/Luminous';
import Message from '../Message/Message';
import Quote from '../Quote/Quote';

const Home = () => {
  return (
    <Box>
      <Navigation />
      <Banner />
      <Luminous />
      <Message />
      <Quote />
      <Announcements />
      <Footer />
    </Box>
  );
};

export default Home;