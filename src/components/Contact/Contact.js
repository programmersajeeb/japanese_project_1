
import React from "react"
import mission from "../../assets/images/mission.jpg"
import fuji from "../../assets/images/fuji.jpg"
import Navigation from "../Shared/Navigation/Navigation"
import Footer from "../Shared/Footer/Footer"
import styles from '../../assets/css/Mission.module.css';
import ContactArea from "../home/contactArea/ContactArea/ContactArea"
import ContactForm from "../home/contactArea/ContactForm/ContactForm"
import { Box } from '@mui/material';

function Contact() {
	return (
		<>
			<Navigation />
			<div>
				<div className="title_header">
					<img src={fuji} alt="Snow" style={{ width: "100%", height: "200px" }}></img>
					<div className="centered"> <h1>お問合せ</h1></div>
				</div>

				<Box sx={{ my: 5 }}>
					<ContactArea />
				</Box>

			</div>

			<Footer />
		</>
	)
}

export default Contact