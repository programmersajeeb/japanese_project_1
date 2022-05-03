import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import office from "../../assets/images/office.JPG"
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
				<Container sx={{ my: 10 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
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
						<Grid item xs={12} md={6}>
							<img src={office} alt="this is ofiice" width="100%" />
						</Grid>
					</Grid>

					<Stack
						sx={{ my: 5 }}
						direction={{ xs: 'column', sm: 'row' }}
						spacing={{ xs: 1, sm: 2, md: 18 }}
					>
						<Box>
							<h1>事業内容：</h1>

							<Typography variant="body2">
								人材紹介事業
							</Typography>
							<Typography variant="body2">
								中古自動車買取
							</Typography>

						</Box>
						<Box>
							<h1>　取得免許番号：</h1>

							<Typography variant="body2">
								有料職業紹介事業（許可番号/０９－ユ－３００２７８）
							</Typography>

							<Typography variant="body2">
								古物商（許可番号/第４１１０３０００１９０９号）
							</Typography>

						</Box>
						<Box>
							<h1>　主要銀行：</h1>

							<Typography variant="body2">
								JAバンク/お取引店：
							</Typography>
							<Typography variant="body2">
								足利市農業協同組合（西支所）
							</Typography>
						</Box>
					</Stack>
				</Container>
			</div>

			<Footer />
		</>
	)
}

export default Company;