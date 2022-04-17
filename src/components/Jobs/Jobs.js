import React from 'react'
import { Container, Grid } from "@mui/material"
import job from "../../assets/images/job.jpg"
import reqrute from "../../assets/images/reqrute.jpg"
import Card from './../Common/Card/Card';
import { jobData } from "./JobData"
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';


function Jobs() {
	return (
		<>
			<Navigation />

			<div className="job">
				<div className="title_header">
					<img src={job} alt="Snow" style={{ width: "100%", height: "200px" }}></img>
					<div className="centered"> <h1>仕事</h1></div>
				</div>
				<Container sx={{ mt: 4 }}>
					<div>
						<h1 style={{ textAlign: "center" }}>当社のビジネスは大きく分けて３つとなります。</h1>
					</div>

					<hr className='style-eight' />

					<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
						{jobData.map((job) => (
							<Grid item xs={2} sm={4} md={4} key={job.id}>
								<Card
									title={job.title}
									imgUrl={job.imgUrl}
									body={job.body}
									subBody={job.subBody}
								/>
							</Grid>
						))}
					</Grid>


					<Grid container spacing={2} style={{ margin: "50px 0" }}>
						<Grid item xs={6} md={6}>
							<img src={reqrute} alt="" width="500" />
						</Grid>
						<Grid item xs={6} md={6}>
							<div className="starter_text">
								<h1>その他</h1>
								<p>
									当社は即戦力となる人材確保と教育がメイン事業になりますが、海外とのパイプラインをもって、日本に足りない商材の輸入や海外から引き合いある製品の輸出などもスタートさせていく考えでおります。詳細は当社HPで情報をアップデートしていきますが、お急ぎの場合はお気軽にご相談いただければと思います。</p>

								<p>※今後取得予定の資格や申請</p>
								<p>	３６協定申請プライバシーマーク取得準備中古物商取り扱い免許独自開発に関する特許関係、商標関係、他
								</p>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>

			<Footer />
		</>
	)
}

export default Jobs