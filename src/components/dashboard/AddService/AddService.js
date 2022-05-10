import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/ContactArea.module.css';
import SweetAlert from './../../Shared/Sweetalert/Sweetalert';
import { Box, Button, Typography } from '@mui/material';

const AddService = () => {
	const { register, setValue, formState: {
		errors
	}, handleSubmit, reset } = useForm();
	const onSubmit = data => {
		console.log(data);
		axios
			.post('http://localhost:8080/products', data)
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
				<Typography variant="h2" component="h2" textAlign='center' fontSize='40px' fontWeight='600' textTransform='uppercase' padding='20px 0' position='fixed' sx={{zIndex:'10', backgroundColor:'#f4f7fa', width:'100%', marginTop:'-9px'}}>サービスを追加</Typography>
				</Box>
					<Box sx={{zIndex:'-10'}} className={styles.contactArea}>
						<form onSubmit={handleSubmit(onSubmit)}>
						<Box width='100%'>
						<select className={styles.input} {...register("select")} onChange={(e) => setValue('icon', e.target.value, { shouldValidate: true })}
						// Using setValue
						>
							<option value="">Icon</option>
							<option value="fas fa-users">User</option>
							<option value="fas fa-user-friends">Friends</option>
							<option value="fas fa-address-card">Address Card</option>
							<option value="fas fa-truck">Delivery</option>
						</select>
						</Box>
						{errors.select && <p>{errors.select.message}</p>}
						<Box width='100%'><input className={styles.input}
							{...register("title", { required: true, /*maxLength: 40*/ })}
							placeholder="Title" /></Box>
						<Box width='100%'><textarea className={styles.input} {...register("description")} placeholder="Description" /></Box>
						<Box width='100%'><Button className={styles.submitBtn} variant="contained" type="submit"> 参加する / Submit </Button></Box>
					</form>
					</Box>
			</Box>
		</Box>
	);
};

export default AddService;