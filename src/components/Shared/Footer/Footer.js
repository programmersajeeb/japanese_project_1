import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{backgroundColor:'#212934'}}>
      <Container sx={{padding:'50px 0'}}>
        <Box>
          <Grid container spacing={0}>
            <Grid xs={12} sm={6} md={4} xl={4}>
              <Box>
                <Typography variant="body1" gutterBottom className={styles.title}>
                  ABOUT RUMINOUS CO., LTD.
                </Typography>
                <Typography variant="body1" gutterBottom className={styles.description}>
                  The three pillars of Luminous. I hope that my unique know-how and information routes around the world will help to energize the current Japanese workplace.
                </Typography>
                <Box>
                  <ul>
                    <li>1: Visa consulting</li>
                    <li>2: Referral business specializing in foreigners</li>
                    <li>3: Dispatch business specializing in foreigners</li>
                  </ul>
                </Box>
                <Typography variant="body1" gutterBottom className={styles.description}>
                  We are in an environment where we can headhunt IT engineers with cutting-edge technology from all over the world through our own routes. I would like to attract as many IT human resources as possible to Japan and make use of the current shortage of human resources while communicating the attractiveness of Japanese development sites.
                </Typography>
                <Typography variant="body1" gutterBottom className={styles.description}>
                  In addition, this idea has been understood by many companies, and we are rapidly increasing the number of partners.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={4} xl={4}>
              <Box>
                <Box>
                  <Typography variant="body1" gutterBottom className={styles.title}>
                    QUICK LINK
                  </Typography>
                  <ul className={styles.menu}>
                    <li><Link to='/' className={styles.link}>&gt; Home</Link></li>
                    <li><Link to='/' className={styles.link}>&gt; Mission</Link></li>
                    <li><Link to='/' className={styles.link}>&gt; Work</Link></li>
                    <li><Link to='/' className={styles.link}>&gt; Company Profile</Link></li>
                    <li><Link to='/' className={styles.link}>&gt; Inquiries</Link></li>
                    <li><Link to='/' className={styles.link}>&gt; Privacy policy</Link></li>
                  </ul>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={4}>
              <Box>
                <Box>
                  <Typography variant="body1" gutterBottom className={styles.title}>
                    INQUIRY
                  </Typography>
                  <ul>
                    <li><span>Address:</span> 403 Sano Heim, 4-4 Izumi-cho, Itabashi-ku, Tokyo ⇒ Access map</li>
                    <li><span>Phone:</span> 03-5939-8386</li>
                    <li><span>Email:</span> info@luminous-jp.net</li>
                    <li><span>Web:</span> <Link to='/' className={styles.link}>http://luminous-jp.net/ </Link></li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{backgroundColor:'#1D242D', padding:'30px 0'}}>
        <Container>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
            <Box>
              <Typography variant="body1" gutterBottom sx={{color:'rgba(255,255,255,0.4)', fontSize:'13px'}}>
                Copyright 2021 | Luminous-jp | All Rights Reserved
              </Typography>
            </Box>
            <Box>
            <Link to='/'><i class="fab fa-facebook-f"></i></Link>
            <Link to='/'><i class="fab fa-twitter"></i></Link>
            <Link to='/'><i class="fab fa-instagram"></i></Link>
            <Link to='/'><i class="fab fa-pinterest-p"></i></Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;