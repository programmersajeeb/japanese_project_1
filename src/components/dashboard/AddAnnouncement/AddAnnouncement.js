import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/AddServices.css';
import form from '../../../assets/css/FormStyle.module.css';

const AddAnnouncement = () => {
	const { register, handleSubmit, reset } = useForm();
	const [url, setUrl] = useState("");


	const processFile = (e) => {
		var image = e.target.files[0];
		console.log(image);
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "alumni");
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

		const blogData = {
			title: data.title,
			image: url,
			time: data.time,
			date: data.date,
			description: data.description
		}
		console.log(blogData);

		axios
			.post('https://secure-crag-50348.herokuapp.com/announcements', blogData)
			.then(res => {
				if (res.data.insertedId) {
					alert('Added successfully');
					reset();
				}
			})
	};

	// const [loading, setLoading] = useState(false)
	// const [image, setImage] = useState("")

	// const uploadImage = async e => {
	//     const files = e.target.files
	//     const data = new FormData()
	//     data.append('file', files[0])
	//     data.append('upload_preset', 'announcement')
	//     setLoading(true)

	//     const res = await fetch("https://api.cloudinary.com/v1_1/dshzafyu9/image/upload", {
	//         method:'POST',
	//         body:data
	//     })
	//     const file = await res.json()
	//     console.log(file)
	//     setImage(file.secure_url)
	//     setLoading(false)
	// }





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
						type="file"
						{...register("image", { required: true })}
						onChange={processFile}
					/>
					{/* {
                        loading?(
                            <h3>Loading...</h3>
                        ):(
                            <img src={image} style={{width:'300px'}} />
                        )
                    } */}
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