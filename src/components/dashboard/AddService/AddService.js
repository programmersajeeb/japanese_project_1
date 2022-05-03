import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/AddServices.css';
import form from '../../../assets/css/FormStyle.module.css';

const AddService = () => {
	const { register, setValue, formState: {
		errors
	}, handleSubmit, reset } = useForm();
	const onSubmit = data => {
		console.log(data);
		axios
			.post('https://secure-crag-50348.herokuapp.com/products', data)
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
				<h2>Please add a service
				</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={form.form}>
					<select {...register("select")} onChange={(e) => setValue('icon', e.target.value, { shouldValidate: true })}
					// Using setValue
					>
						<option value="">Null</option>
						<option value="fas fa-users">hi</option>
						<option value="fa-solid fa-address-card">profile</option>
						<option value="fas-fa fa-globe">World</option>

					</select>
					{errors.select && <p>{errors.select.message}</p>}
					<input
						{...register("title", { required: true, /*maxLength: 40*/ })}
						placeholder="Title" />
					<textarea {...register("description")} placeholder="Description" />
					<input type="submit" />
				</form>
			</div>
		</div>
	);
};

export default AddService;