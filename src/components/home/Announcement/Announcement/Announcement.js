import {Box, Grid, Typography} from '@mui/material';
import React from 'react';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/Announcements.module.css';
import { Link } from 'react-router-dom';

const Announcement = (props) => {
  const { img, title, date, description } = props.announcement;
    return (
        <Grid item="item" xs={12} sm={6} md={4} xl={4}>
            <Box sx={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
                <Box className={styles.img}>
                    <img src={img} alt=""/>
                    <Box className={styles.overlay}>
                        <p>zb kjsv ushv oDH OVDH JOIV</p>
                    </Box>
                </Box>
                <Box sx={{padding:'30px 20px'}}>
                    <Box>
                        <Typography variant="h1" component="h2" className={styles.cardTitle}>
                            {title}
                        </Typography>
                        <Typography variant="body1" gutterBottom="gutterBottom" className={styles.date}>
                            {date} &nbsp;&nbsp;|&nbsp;&nbsp;
                            <span>
                                <Link to='/' className={styles.notice}>Notice</Link>
                            </span>
                        </Typography>
                    </Box>
                    <Box className={styles.shep}></Box>
                    <Box>
                        <Typography
                            variant="body1"
                            gutterBottom="gutterBottom"
                            className={styles.description}>
                            {description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <Box>
                            <Link to='/' className={styles.link}>
                                Read More &gt;
                            </Link>
                        </Box>
                        <Box>
                            <span className={styles.icon}>
                                <i class="fas fa-comments"></i> &nbsp;
                                0</span>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default Announcement;