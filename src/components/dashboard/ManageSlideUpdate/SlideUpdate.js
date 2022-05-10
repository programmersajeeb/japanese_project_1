import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SweetAlert from '../../Shared/Sweetalert/Sweetalert';
import styles from '../../../assets/css/ContactArea.module.css';

const SlideUpdate = () => {
  const { slideupdateupdateId } = useParams();
	const [slides, setSlides] = useState({});
	useEffect(() => {
		fetch(`http://localhost:8080/slides/${slideupdateupdateId}`)
			.then(res => res.json())
			.then(data => setSlides(data))
	}, [slideupdateupdateId]);
  const handleTitleChange = e => {
    const updatedTitle = e.target.value;
    const updatedSlide = {title: updatedTitle, subTitle: slides.subTitle};
    setSlides(updatedSlide);
  }
  const handleSubTitleChange = e => {
    const updatedSubTitle = e.target.value;
    const updatedSlide = {title: slides.title, subTitle: updatedSubTitle};
    setSlides(updatedSlide);
  }
  const handleUpdateSlide = e =>{
    const url = `http://localhost:8080/slides/${slideupdateupdateId}`;
    fetch(url, {
      method:'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(slides)
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
				<Typography variant="h2" component="h2" textAlign='center' fontSize='40px' fontWeight='600' textTransform='uppercase' padding='20px 0' position='fixed' sx={{zIndex:'10', backgroundColor:'#f4f7fa', width:'100%', marginTop:'-9px'}}>スライドの更新</Typography>
				</Box>
          <Box sx={{zIndex:'-10'}} className={styles.contactArea}>
            <form onSubmit={handleUpdateSlide}>
            <Box width='100%'>
            <input className={styles.input} type="text" onChange={handleTitleChange} value={slides.title || ''} />
            </Box>
            <Box width='100%'>
            <input className={styles.input} type="text" onChange={handleSubTitleChange} value={slides.subTitle || ''} />
            </Box>
            <Box width='100%'><Button className={styles.submitBtn} variant="contained" type="submit"> アップデート / Update </Button></Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SlideUpdate;