import {Button, Container, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import styles from '../../../assets/css/ContactArea.module.css';
import SweetAlert from '../../Shared/Sweetalert/Sweetalert';

const MakeAdmin = () => {
    const {register, handleSubmit, reset} = useForm();
    const [success, setSuccess] = useState();
    const [error, setError] = useState(false);
    const onSubmit = (data) => {
        const email = data.email;
        const user = {
            email
        };
        fetch('http://localhost:8080/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true);
                    setError(false);
                    reset();
                }
                if (data.modifiedCount === 0) {
                    setSuccess(false);
                    setError(true);
                    reset();
                }
            });
    };
    return (
        <Box>
            <Container>
                <Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            marginBottom='100px'>
                            <Typography
                                variant="h2"
                                component="h2"
                                textAlign='center'
                                fontSize='40px'
                                fontWeight='600'
                                textTransform='uppercase'
                                padding='20px 0'
                                position='fixed'
                                sx={{zIndex:'10', backgroundColor:'#f4f7fa', width:'100%', marginTop:'-9px'}}>管理者を作ります</Typography>
                        </Box>
                        <Box sx={{zIndex:'-10'}} className={styles.contactArea}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box width='100%'>
                                    <input className={styles.input}
                                        type='email'
                                        placeholder='example@gmail.com'
                                        { ...register('email', { required: true}) }/>
                                </Box>
                                <Box width='100%'>
                                    <Button className={styles.submitBtn} variant="contained" type="submit">
                                        参加する / Submit
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                    {success && (SweetAlert("Admin Successfully"))}

                    {error && (SweetAlert("Already Added"))}
                </Box>
            </Container>
        </Box>
    );
};

export default MakeAdmin;