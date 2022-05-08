import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import styles from '../../../assets/css/AddServices.css';
import form from '../../../assets/css/FormStyle.module.css';
import '../../../assets/css/golobal.css';
import { processFile } from './../../Shared/ProcessFile/processFile';
import SweetAlert from './../../Shared/Sweetalert/Sweetalert';

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
		// console.log(blogData);

		await axios
			.post('https://secure-crag-50348.herokuapp.com/announcements', blogData)
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
		<div>
			<div className={styles.AddServiceArea}>
				<h2>Please add a Announcement</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={form.form}>
					<input
						{...register("title", { required: true, /*maxLength: 40*/ })}
						placeholder="Title" />
					<input
						{...register("image", { required: true })}
						type="file"
					/>
					<input style={{ display: 'none' }} type="text" value={formatted} {...register("time")} />
					<input style={{ display: 'none' }} type="text" value={new Date()} {...register("date")} />
					<textarea {...register("description")} placeholder="Description" />
					<input type="submit" />
				</form>
			</div>
		</div>
	);
};

export default AddAnnouncement;