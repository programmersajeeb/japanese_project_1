import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/ContactArea.module.css';
import { processFile } from './../../Shared/ProcessFile/processFile';
import SweetAlert from './../../Shared/Sweetalert/Sweetalert';
import { Box, Button, Container, Typography } from '@mui/material';

const AddAnnouncement = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async (data) => {
		const blogData = {
			title: data.title,
			time: data.time,
			date: data.date,
			description: data.description,
			image: await processFile(data.image[0])
		}
		console.log(blogData);

		await axios
			.post('http://localhost:8080/announcements', blogData)
			.then(res => {
				if (res.data.insertedId) {
					SweetAlert("Added successfully");
					reset();
				}
			})
	};

	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();

	const addZero = (num) => `${num}`.padStart(2, '0');

	const formatted =
		year +
		'-' +
		addZero(month + 1) +
		'-' +
		addZero(day);
	console.log(formatted);
	return (
		<Box>
			<Container>
				<Box>
				<Box sx={{display:'flex', justifyContent:'center'}} marginBottom='100px'>
				<Typography variant="h2" component="h2" textAlign='center' fontSize='40px' fontWeight='600' textTransform='uppercase' padding='20px 0' position='fixed' sx={{zIndex:'10', backgroundColor:'#f4f7fa', width:'100%', marginTop:'-9px'}}>アナウンスを追加</Typography>
				</Box>
				<Box sx={{zIndex:'-10'}} className={styles.contactArea}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Box width='100%'><input className={styles.input}
						{...register("title", { required: true, /*maxLength: 40*/ })}
						placeholder="Title" /></Box>
					<Box><input className={styles.input}
						{...register("image", { required: true })}
						type="file"
					/></Box>
					<Box>
					<input className={styles.input} style={{ display: 'none' }} type="text" value={formatted} {...register("time")} />
					</Box>
					<Box><input className={styles.input} style={{ display: 'none' }} type="text" value={new Date()} {...register("date")} /></Box>
					<Box><textarea className={styles.input} {...register("description")} placeholder="Description" /></Box>
					<Box width='100%'><Button className={styles.submitBtn} variant="contained" type="submit"> 参加する / Submit </Button></Box>
				</form>
			</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default AddAnnouncement;