import React from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/AddServices.css'; 

const AddAnnouncement = () => {
  const {register, handleSubmit, reset} = useForm();
  const onSubmit = data => {
      console.log(data);
      axios
          .post('http://localhost:8080/announcements', data)
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
                <h2>Please add a Announcement
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true, maxLength: 40 })}
                        placeholder="Name"/>
                    <textarea {...register("discription")} placeholder="Description"/>
                    <input type="number" {...register("price")} placeholder="Price"/>
                    <input {...register("img")} placeholder="Img url"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
  );
};

export default AddAnnouncement;