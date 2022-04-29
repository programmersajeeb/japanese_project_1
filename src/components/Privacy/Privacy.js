import { Container, Grid, Typography } from "@mui/material"
import React from "react"
import mission from "../../assets/images/mission.jpg"
import fuji from "../../assets/images/fuji.jpg"
import Navigation from "../Shared/Navigation/Navigation"
import Footer from "../Shared/Footer/Footer"
import styles from '../../assets/css/Mission.module.css';

function Privacy() {
	return (
		<>
			<Navigation />
			<div>
				<div className="title_header">
					<img src={fuji} alt="Snow" style={{ width: "100%", height: "200px" }}></img>
					<div className="centered"> <h1>プライバシーポリシー</h1></div>
				</div>
				<Container sx={{ my: 10 }}>
					<Typography component="h2" variant="h6" gutterBottom={true}>
						プライバシーポリシーについて
					</Typography>

					<Typography paragraph>
						私たちのプライバシーポリシーについての考え方。
					</Typography>
					<hr />
					<Typography component="h2" variant="h6" gutterBottom={true}>
						プライバシーポリシー基本理念
					</Typography>
					<Typography paragraph>
						株式会社 エムアイジャパン では、人材紹介事業を実施の上で、お客様の個人情報がプライバシーポリシー及び個人情報保護方針を構成する重要な情報であること
						を深く認識したうえで、その業務において取り扱いは十分に注意し管理することを社内規定に定め、それを遵守することを務めます。また、それに関連する書類や
						組織体制なども配備しお客様との安心してお取引及びお手伝いできる環境を作っていくものとします。
					</Typography>
					<Typography component="h2" variant="h6" gutterBottom={true}>
						法令規範の遵守について
					</Typography>
					<Typography paragraph>
						私たちは、個人情報に関する法令・国が定める指針、そのほか規範及び社会秩序を遵守したうえでより安全に個人情報の保護を適切に行います。
					</Typography>
					<Typography component="h2" variant="h6" gutterBottom={true}>
						個人情報の取得、利用、提供について
					</Typography>
					<Typography paragraph>
						私たちは事業を遂行していくために必要範囲内で個人情報の取得、利用、提供を求めたり
						開示したりを行いますがその利用目的は情報提供者や情報必要な企業様にしっかりとお伝えさせて頂き、その目的を達成した際には必要な範囲で公正かつ適切に処
						置を講じます。
						また、取得した個人情報の目的外利用がないようにその処置も講じます。
					</Typography>
					<Typography component="h2" variant="h6" gutterBottom={true}>
						個人情報の適切な管理について
					</Typography>
					<Typography paragraph>
						私たちは、取り扱う個人情報について、不正アクセル、紛失、破綻、改ざん、漏洩などの危機管理は十分に事前に書類及びスタッフの意識付け等でこのようなこと
						がないように十分に認識ができるよう合理的な安全対策を常に実施しております。
						また、問題が発生した時には適切な是正措置も講じます。
					</Typography>
					<Typography component="h2" variant="h6" gutterBottom={true}>
						継続的な改善と安全対策について
					</Typography>
					<Typography paragraph>
						私たちは、個人情報を保護に関する管理規定及び管理体制を整備し常にその内容を見直し
						事前に安全対策を継続的に見直し改善することで紛失や破綻、改ざん、漏洩などのリスクに備えて務めてます。
					</Typography>
				</Container>
			</div>

			<Footer />
		</>
	)
}

export default Privacy