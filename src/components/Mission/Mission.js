import { Container, Grid } from "@mui/material"
import React from "react"
import mission from "../../assets/images/mission.jpg"
import fuji from "../../assets/images/fuji.jpg"
import Navigation from "../Shared/Navigation/Navigation"
import Footer from "../Shared/Footer/Footer"
import styles from '../../assets/css/Mission.module.css';

function Mission() {
	return (
		<>
			<Navigation />
			<div>
				<div className="title_header">
					<img src={fuji} alt="Snow" style={{ width: "100%", height: "200px" }}></img>
					<div className="centered"> <h1>株式会社 エムアイジャパンのミッション</h1></div>
				</div>
				<Container className={styles.mission}>
					<Grid container spacing={2}>
						<Grid item xs={6} md={6}>
							<div className="starter_text">
								<h1>私たちのミッション</h1>
								<p>
									私たちのミッションは「優秀な外国人労働者を日本の職場にマッチングさせ、業務の潤滑油として機能させていく」ことがミッションだと
									考えてます。</p>

								<p>職場環境は生きて活性化してます。瞬間的に人手が足りなくなったり人手がないために
									事業を中断及び中止せざるを得ない環境ができてしまうことは本当に残念なことです。</p>
								<p>	そんなことがないように我々も与えられたミッションを追求いたします。
								</p>
							</div>
						</Grid>
						<Grid item xs={6} md={4}>
							<img src={mission} alt="" />
						</Grid>
					</Grid>
				</Container>
			</div>

			<Footer />
		</>
	)
}

export default Mission
