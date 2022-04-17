import { Container, Grid } from '@mui/material'
import React from 'react'
import mission from "../../assets/images/office.JPG"
import fuji from "../../assets/images/fuji.jpg"
import Navigation from './../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

function Company() {
	return (
		<>
			<Navigation />
			<div>
				<div className="title_header">
					<img src={fuji} alt="Snow" style={{ width: "100%", height: "200px" }}></img>
					<div className="centered"> <h1>会社概要</h1></div>
				</div>
				<Container style={{ margin: "50px" }}>
					<Grid container spacing={2}>
						<Grid item xs={6} md={6}>
							<div className="starter_text">
								<h1>株式会社　エムアイジャパン</h1>
								<br />
								<p>
									株式会社　エムアイジャパン
									<br />
									代表取締役　イスラム　モニルル
									<br />
									設立：2021年１月
									<br />
									資本金：７００万円</p>

								<br /><br />

								<p>住所：〒３２６－０８４４
									<br />
									栃木県足利市鹿島町１０９２番地15
									<br />
									エクセレントヴィレッジ２０１号。
									<br />
									TEL　０５０－３７０２－４５８４
									<br />
									FAX　０２８４－８２－９２９５
									<br />
									E-mail：mijapan4@gmail.com
									<br />
									Web : https://mi-japan.net</p>

							</div>
						</Grid>
						<Grid item xs={6} md={4}>
							<img src={mission} alt="" height="500px" />
						</Grid>
					</Grid>
				</Container>
			</div>

			<Footer />
		</>
	)
}

export default Company