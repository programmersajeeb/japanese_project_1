import React from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/AddServices.css'; 

const AddSlide = () => {
  const {register, handleSubmit, reset} = useForm();
  const onSubmit = data => {
      console.log(data);
      axios
          .post('http://localhost:8080/slides', data)
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("title", { required: true, /* maxLength: 40*/ })}
                        placeholder="Title"/>
                    <input
                        {...register("subTitle", { required: true, /* maxLength: 40*/ })}
                        placeholder="Sub-Title"/>
                    <input {...register("background")} placeholder="Img url"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default AddSlide;