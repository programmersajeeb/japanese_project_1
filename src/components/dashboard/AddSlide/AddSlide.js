import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import styles from '../../../assets/css/AddServices.css';
import form from '../../../assets/css/FormStyle.module.css';
import '../../../assets/css/golobal.css';
import { processFile } from './../../Shared/ProcessFile/processFile';
import SweetAlert from './../../Shared/Sweetalert/Sweetalert';


const AddSlide = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		const slideData = {
			title: data.title,
			subTitle: data.subTitle,
			background: await processFile(data.background[0])
		}
		
		await axios
			.post('https://secure-crag-50348.herokuapp.com/slides', slideData)
			.then(res => {
				if (res.data.insertedId) {
					SweetAlert("Added successfully");
					reset();
				}
			})
	}
	return (
		<div>
			<div className={styles.AddServiceArea}>
				<h2>Please add a Slide</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={form.form}>
					<input
						{...register("title", { required: true, /* maxLength: 40*/ })}
						placeholder="Title" />
					<input
						{...register("subTitle", { required: true, /* maxLength: 40*/ })}
						placeholder="Sub-Title" />

					<input
						{...register("background", { required: true })}
						type="file"
					/>
					<input type="submit" />
				</form>
			</div>
		</div>
	);
};

export default AddSlide;