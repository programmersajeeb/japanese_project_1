import React, { useRef, useState } from 'react';
import '../../../../assets/css/golobal.css';
import styles from '../../../../assets/css/ContactArea.module.css';
import { Box, Grid, Typography, Container, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const ContactForm = () => {
	const [message, setMessage] = useState("");
	const { register, formState: { errors }, handleSubmit, reset } = useForm();
	const form = useRef();

	const onSubmit = (data, r) => {

		//email js configure
		const templateId = 'template_cciqade';
		const serviceId = 'mijapan4';
		sendFeedback(serviceId, templateId, {
			name: data.firstName + " " + data.surname,
			number: data.number,
			email: data.email,
			subject: data.subject,
			message: data.message,
			reply_to: r.target.reset(),
		});

		axios
			.post('http://localhost:8080/reports', data)
			.then(res => {
				if (res.data.insertedId) {
					Swal.fire({
						icon: "success",
						title: "メールを送信します。ありがとうございます。",
						showConfirmButton: false,
						timer: 1500,
					});
					reset();
				}
			})
	}
	const sendFeedback = (serviceId, templateId, variables) => {
		emailjs
			.send(serviceId, templateId, variables, 'IhWpm_pjyMpVd2Sz9')
			.then((res) => {
				console.log('succes');
			})
			.catch((err) => console.error(err.text));
	};

	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const addZero = (num) => `${num}`.padStart(2, '0');

	const formatted =
		year +
		'-' +
		addZero(month + 1) +
		'-' +
		addZero(day) +
		' ' +
		addZero(hours) +
		':' +
		addZero(minutes) +
		':' +
		addZero(seconds);

	console.log(formatted);


	return (
		<Box sx={{padding:'80px 0'}}>
			<Container>
				<Box className={styles.contactArea}>
				<form ref={form} onSubmit={handleSubmit(onSubmit)}>
							<Box width='100%' className={styles.inputAlign}>
								<Box width='100%'><input className={styles.input} placeholder='氏名 / First Name' {...register("firstName", { required: true })} />{errors.firstName?.type === 'required' && "First name is required"}</Box>
								<Box width='100%'><input className={styles.input} placeholder='姓 / Surname' {...register("surname", { required: true })} />{errors.surname && "Surname is required"}</Box>
							</Box>
							<Box width='100%'><input className={styles.input} type="email" placeholder='メールアドレス / Email Address' {...register("email", { required: true })} /></Box>
							<Box width='100%'><input className={styles.input} type="number" placeholder='電話番号 / Telephone Number' {...register("number", { required: true })} /></Box>
							<Box width='100%'><input className={styles.input} type="text" placeholder='主題 / Subject' {...register("subject", { required: true })} /></Box>
							<Box width='100%'><input className={styles.input} style={{ display: 'none' }} type="text" value={formatted} {...register("time")} /> </Box>
							<Box width='100%'> <input className={styles.input} style={{ display: 'none' }} type="text" value={new Date()} {...register("date")} /> </Box>
							<Box width='100%'><textarea className={styles.input} placeholder='メッセージ / Massage' {...register("message", { required: true })} /></Box>
							<Box width='100%'><Button className={styles.submitBtn} variant="contained" type="submit"> 送信 / Send </Button></Box>
						</form>
				</Box>
			</Container>
		</Box>
	);
};

export default ContactForm;