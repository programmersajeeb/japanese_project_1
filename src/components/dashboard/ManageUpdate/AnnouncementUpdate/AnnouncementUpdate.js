import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SweetAlert from '../../../Shared/Sweetalert/Sweetalert';
import styles from '../../../../assets/css/ContactArea.module.css';
import '../../../../assets/css/golobal.css';

const AnnouncementUpdate = () => {
  const { announcementupdateId } = useParams();
	const [announcements, setAnnouncements] = useState({});
	useEffect(() => {
		fetch(`http://localhost:8080/announcements/${announcementupdateId}`)
			.then(res => res.json())
			.then(data => setAnnouncements(data))
	}, [announcementupdateId]);
  const handleTitleChange = e => {
    const updatedTitle = e.target.value;
    const updatedAnnouncement = {title: updatedTitle, description: announcements.description};
    setAnnouncements(updatedAnnouncement);
  }
  const handleDescriptionChange = e => {
    const updatedDescription = e.target.value;
    const updatedAnnouncement = {title: announcements.title, description: updatedDescription};
    setAnnouncements(updatedAnnouncement);
  }
  const handleUpdateAnnouncement = e =>{
    const url = `http://localhost:8080/announcements/${announcementupdateId}`;
    fetch(url, {
      method:'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(announcements)
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
				<Typography variant="h2" component="h2" textAlign='center' fontSize='40px' fontWeight='600' textTransform='uppercase' padding='20px 0' position='fixed' sx={{zIndex:'10', backgroundColor:'#f4f7fa', width:'100%', marginTop:'-9px'}}>更新の発表</Typography>
				</Box>
          <Box sx={{zIndex:'-10'}} className={styles.contactArea}>
            <form onSubmit={handleUpdateAnnouncement}>
            <Box width='100%'>
            <input className={styles.input} type="text" onChange={handleTitleChange} value={announcements.title || ''} />
            </Box>
            <Box width='100%'>
            <textarea className={styles.input} type="text" onChange={handleDescriptionChange} value={announcements.description || ''} />
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

export default AnnouncementUpdate;