import {Box} from '@mui/system';
import React, {useEffect, useState} from 'react';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button, Container, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import styles from '../../../assets/css/Banner.module.css';
import '../../../assets/css/golobal.css';

const ManageSlide = () => {
    const [slides, setSlides] = useState([]);
    console.log(slides);
    useEffect(() => {
        fetch('http://localhost:8080/slides')
            .then(res => res.json())
            .then(data => setSlides(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:8080/slides/${id}`;
        fetch(url, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = slides.filter(slide => slide._id !== id);
                    setSlides(remaining);
                };

            });
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 4000
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 4000
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 4000
                }
            }
        ]
    };
    return (
        <Box className="bannerMainArea">
            <Slider {...settings}>
                {
                    slides.map(
                        slide => <div key={slide._id}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${slide.background})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                <Container
                                    sx={{
                                        width: '100%'
                                    }}>
                                    <Box
                                        sx={{
                                            height: '70vh',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                        <Box
                                            sx={{
                                                width: '100%'
                                            }}>
                                            <Box
                                                sx={{
                                                    backgroundColor: 'rgba(0,0,0,0.4)',
                                                    padding: '20px'
                                                }}>
                                                <Typography variant="h2" component="h2" className={styles.title}>
                                                    {slide.title}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    backgroundColor: 'rgba(0,0,0,0.4)',
                                                    marginTop: '20px',
                                                    padding: '20px'
                                                }}>
                                                <Typography variant="h2" component="h2" className={styles.subTitle}>
                                                    {slide.subTitle}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    marginTop: '40px'
                                                }}>
                                                <Link to='/' className={styles.bannerBtn}>detail</Link>
                                                <Button
                                                    className={styles.bannerBtn}
                                                    onClick={() => handleDelete(slide._id)}
                                                    size="large">Delete</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Container>
                            </Box>
                        </div>
                    )
                }
            </Slider>
        </Box>
    );
};

export default ManageSlide;