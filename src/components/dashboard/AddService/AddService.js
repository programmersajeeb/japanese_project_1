import React from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/AddServices.css';

const AddService = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios
            .post('http://localhost:8080/products', data)
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("icon")} placeholder="Font-awasome icon class name"/>
                    <input
                        {...register("title", { required: true, /*maxLength: 40*/ })}
                        placeholder="Title"/>
                    <textarea {...register("description")} placeholder="Description"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default AddService;