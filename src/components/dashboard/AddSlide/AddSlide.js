import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/AddServices.css';
import form from '../../../assets/css/FormStyle.module.css';
import { useState } from 'react';

const AddSlide = () => {
	const { register, handleSubmit, reset } = useForm();
	const [url, setUrl] = useState("");


	const processFile = (e) => {
		var image = e.target.files[0];
		console.log(image);
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "mijapan");
		data.append("cloud_name", "dpakfnqvn");
		fetch("https://api.cloudinary.com/v1_1/dpakfnqvn/image/upload", {
			method: "post",
			body: data,
		})
			.then((res) => res.json())
			.then((data) => {
				setUrl(data.url);
				console.log(data)
			})
			.catch((err) => console.log(err));
	};

	const onSubmit = data => {
		const slideData = {
			title: data.title,
			subTitle: data.subTitle,
			background: url
		}

		axios
			.post('https://secure-crag-50348.herokuapp.com/slides', slideData)
			.then(res => {
				if (res.data.insertedId) {
					alert('Added successfully');
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
						type="file"
						{...register("background", { required: true })}
						onChange={processFile}

					/>
					<input type="submit" />
				</form>
			</div>
		</div>
	);
};

export default AddSlide;