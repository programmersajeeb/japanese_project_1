import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/golobal.css';

const Reports = () => {
  const [reports, setReports] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/reports')
            .then(res => res.json())
            .then(data => setReports(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:8080/reports/${id}`;
        fetch(url, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = reports.filter(report => report._id !== id);
                    setReports(remaining);
                };
            });
    };
  return (
    <Box sx={{width:'100%', height:'70vh', overflow:'auto'}}>
      <Container>
        <Box>
        <Grid container spacing={4}>
        {
            reports.map(
              report =>
              <Grid key={report._id} item xs={12} md={6} xl={6} lg={6}>
                <Box sx={{padding:'10px'}}>
                  <Box sx={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
                    <Box><span style={{fontWeight:'700'}}
                    >Time:</span>&nbsp;{report.time}</Box>
                    <Box><Button onClick={() => handleDelete(report._id)} size="large"><i class="fas fa-trash" style={{color:'red'}}></i></Button></Box>
                  </Box>
                  <Box><Typography variant="body1" gutterBottom> <span style={{fontWeight:'700'}}>Name:</span>&nbsp;{report.firstName}&nbsp;{report.lastName} </Typography></Box>
                  <Box><Typography variant="body1" gutterBottom> <span style={{fontWeight:'700'}}>Number:</span>&nbsp;<a href={`tel: ${report.number}`}>{report.number}</a></Typography></Box>
                  <Box><Typography variant="body1" gutterBottom> <span style={{fontWeight:'700'}}>Email:</span>&nbsp;<a href={`mailto:${report.email}`}> {report.email}</a></Typography></Box>
                  <Box><Typography variant="body1" gutterBottom> <span style={{fontWeight:'700'}}>Subject:</span>&nbsp;{report.subject} </Typography></Box>
                  <Box><Typography variant="body1" gutterBottom> <span style={{fontWeight:'700'}}>Report:</span>&nbsp;{report.report} </Typography></Box>
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

export default Reports;