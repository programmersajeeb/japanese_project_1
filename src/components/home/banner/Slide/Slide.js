import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/Banner.module.css';
const Slide = (props) => {
  const { title, subTitle, background } = props.slide;
  return (
    <div>
            <Box sx={{backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
              <Container sx={{width:'100%'}}>
                <Box sx={{height:'70vh', display:'flex', alignItems:'center'}}>
                  <Box sx={{ width:'100%'}}>
                    <Box sx={{backgroundColor:'rgba(0,0,0,0.4)', padding:'20px'}}>
                      <Typography variant="h2" component="h2" className={styles.title}>
                        {title}
                      </Typography>
                    </Box>
                    <Box sx={{backgroundColor:'rgba(0,0,0,0.4)', marginTop:'20px', padding:'20px'}}>
                      <Typography variant="h2" component="h2" className={styles.subTitle}>
                          {subTitle}
                        </Typography>
                    </Box>
                    {/* <Box sx={{marginTop:'40px'}}>
                      <Link to='#inquirie' className={styles.bannerBtn}>detail</Link>
                      <a href="#inquirie" className={styles.bannerBtn}>inquirie</a>
                    </Box> */}
                  </Box>
                </Box>
              </Container>
            </Box>
          </div>
  );
};

export default Slide;