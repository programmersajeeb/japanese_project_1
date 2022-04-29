import React from "react"
import Navigation from "../Shared/Navigation/Navigation"
import Footer from "../Shared/Footer/Footer"
import ContactForm from "../home/contactArea/ContactForm/ContactForm"
import { Container } from '@mui/material';
import ContactArea from "../home/contactArea/ContactArea/ContactArea";
import fuji from "../../assets/images/fuji.jpg"


function Contact() {
	return (
		<>

			<Navigation />

			<div className="title_header">
				<img src={fuji} alt="Snow" style={{ width: "100%", height: "200px" }}></img>
				<div className="centered"> <h1>お問合せ</h1></div>
			</div>

			<ContactArea />


			<Footer />
		</>
	)
}

export default Contact