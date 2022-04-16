import React from "react";
import "./card.styles.css";

const Card = ({ title, imgUrl, body, subBody }) => {
	console.log(imgUrl);
	return (
		<div className="card-container">
			<div className="image-container">
				<img src={imgUrl} alt="" />
			</div>
			<div className="card-content">
				<div className="card-title">
					<h3>{title}</h3>
				</div>
				<div className="card-body">
					<p> {body} </p>
				</div>
				<div className="card_sub">
					<p> {subBody} </p>
				</div>
			</div>
		</div>
	);
};

export default Card;
