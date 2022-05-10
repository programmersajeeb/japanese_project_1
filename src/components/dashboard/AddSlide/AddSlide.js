import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/ContactArea.module.css';
import { processFile } from './../../Shared/ProcessFile/processFile';

import SweetAlert from './../../Shared/Sweetalert/Sweetalert';
import { Box, Button, Typography } from '@mui/material';

const AddSlide = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		const slideData = {
			title: data.title,
			subTitle: data.subTitle,
			background: await processFile(data.background[0])
		}

		console.log(slideData);

		await axios
			.post('http://localhost:8080/slides', slideData)
			.then(res => {
				if (res.data.insertedId) {
					SweetAlert("Added successfully");
					reset();
				}
			})
	}
	return (
		<Box>
			<Box>
			<Box sx={{display:'flex', justifyContent:'center'}} marginBottom='100px'>
				<Typography variant="h2" component="h2" textAlign='center' fontSize='40px' fontWeight='600' textTransform='uppercase' padding='20px 0' position='fixed' sx={{zIndex:'10', backgroundColor:'#f4f7fa', width:'100%', marginTop:'-9px'}}>スライドを追加</Typography>
				</Box>
				<Box sx={{zIndex:'-10'}} className={styles.contactArea}>
					<form onSubmit={handleSubmit(onSubmit)} >
						<Box width='100%'><input className={styles.input}
							{...register("title", { required: true, /* maxLength: 40*/ })}
							placeholder="Title" /></Box>
						<Box width='100%'><input className={styles.input}
							{...register("subTitle", { required: true, /* maxLength: 40*/ })}
							placeholder="Sub-Title" /></Box>

						<Box width='100%'><input className={styles.input}
							{...register("background", { required: true })}
							type="file"
						/></Box>
						<Box width='100%'><Button className={styles.submitBtn} variant="contained" type="submit"> 参加する / Submit </Button></Box>
					</form>
				</Box>
			</Box>
		</Box>
	);
};

export default AddSlide;