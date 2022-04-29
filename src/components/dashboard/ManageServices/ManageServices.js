import {Button, Container, Grid, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React, {useEffect, useState} from 'react';
import styles from '../../../assets/css/Service.module.css';
import '../../../assets/css/golobal.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:8080/products/${id}`;
        fetch(url, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                };

            });
    };
    return (
        <Box sx={{
                marginBottom: '50px'
            }}>
            <Container>
                <Box>
                    <Grid container="container" spacing={2}>
                        {
                            services.map(
                                service => <Grid key={service._id} item="item" xs={12} sm={6} md={4} xl={4}>
                                    <Box
                                        sx={{
                                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                            borderRadius: '10px',
                                            padding: '50px 25px'
                                        }}>
                                        <Box
                                            sx={{
                                                margin: '20px 0'
                                            }}>
                                            <Box className={styles.icon}>
                                                <i class={service.icon}></i>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography variant="h2" component="h2" className={styles.title}>
                                                {service.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                gutterBottom="gutterBottom"
                                                className={styles.details}>
                                                {service.description}
                                            </Typography>
                                        </Box>
                                        <Box sx={{display:'flex', justifyContent:'center'}}>
                                            <Button
                                                className={styles.bannerBtn}
                                                onClick={() => handleDelete(service._id)}
                                                size="large">Delete</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default ManageServices;