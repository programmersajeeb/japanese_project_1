import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SweetAlert from '../../Shared/Sweetalert/Sweetalert';
import styles from '../../../assets/css/ContactArea.module.css';
import '../../../assets/css/golobal.css';

const ServiceUpdate = () => {
  const { serviceupdateupdateId } = useParams();
	const [services, setServices] = useState({});
	useEffect(() => {
		fetch(`http://localhost:8080/products/${serviceupdateupdateId}`)
			.then(res => res.json())
			.then(data => setServices(data))
	}, [serviceupdateupdateId]);
  const handleTitleChange = e => {
    const updatedTitle = e.target.value;
    const updatedService = {title: updatedTitle, description: services.description};
    setServices(updatedService);
  }
  const handleSubTitleChange = e => {
    const updatedDescription = e.target.value;
    const updatedService = {title: services.title, description: updatedDescription};
    setServices(updatedService);
  }
  const handleUpdateSlide = e =>{
    const url = `http://localhost:8080/products/${serviceupdateupdateId}`;
    fetch(url, {
      method:'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(services)
    })
    .then(res => res.json())
    .then(data =>{
      SweetAlert("Update Done");
      console.log(data);
    })
    e.preventDefault();
  }
  return (
    <Box>
      <Container>
        <Box>
        <Box sx={{display:'flex', justifyContent:'center'}} marginBottom='100px'>
				<Typography variant="h2" component="h2" textAlign='center' fontSize='40px' fontWeight='600' textTransform='uppercase' padding='20px 0' position='fixed' sx={{zIndex:'10', backgroundColor:'#f4f7fa', width:'100%', marginTop:'-9px'}}>更新サービス</Typography>
				</Box>
          <Box sx={{zIndex:'-10'}} className={styles.contactArea}>
            <form onSubmit={handleUpdateSlide}>
            <Box width='100%'>
            <input className={styles.input} type="text" onChange={handleTitleChange} value={services.title || ''} />
            </Box>
            <Box width='100%'>
            <textarea className={styles.input} type="text" onChange={handleSubTitleChange} value={services.description || ''} />
            </Box>
            <Box>
            <Box width='100%'><Button className={styles.submitBtn} variant="contained" type="submit"> アップデート / Update </Button></Box>
            </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceUpdate;