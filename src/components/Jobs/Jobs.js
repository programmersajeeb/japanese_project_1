import React from 'react'
import { Container, Box, Stack } from "@mui/material"
import job from "../../assets/images/job.jpg"
import reqrute from "../../assets/images/reqrute.jpg"
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import Services from '../home/luminous/Services/Services';


function Jobs() {
	return (
		<>
			<Navigation />

			<Box className="job" sx={{ my: 5 }}>
				<div className="title_header">
					<img src={job} alt="Snow" style={{ width: "100%", height: "200px" }}></img>
					<div className="centered"> <h1>仕事</h1></div>
				</div>
				<Container sx={{ mt: 4 }}>
					<div>
						<h1 style={{ textAlign: "center" }}>当社のビジネスは大きく分けて３つとなります。</h1>
					</div>

					<hr className='style-eight' />

					<Services />

					<Stack
						direction={{ xs: 'column', sm: 'row' }}
						spacing={{ xs: 1, sm: 2, md: 4 }}
						justifyContent="center"
						alignItems="center"
					>
						<img src={reqrute} alt="" width="100%" />
						<div className="starter_text">
							<h1>その他</h1>
							<p>
								当社は即戦力となる人材確保と教育がメイン事業になりますが、海外とのパイ
								プラインをもって、日本に足りない商材の輸入や海外から引き合いある製品の
								輸出などもスタートさせていくと考えでおります。</p>
						</div>

					</Stack>
				</Container>
			</Box>

			<Footer />
		</>
	)
}

export default Jobs