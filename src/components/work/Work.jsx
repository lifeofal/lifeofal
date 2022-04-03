import React, { useState } from "react";
import "./work.scss";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { data } from "../../data/slider-data.js";

export default function Work() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleClick = (way) => {
		way === "left"
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
			: setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
			
	};
	return (
		<div className="work" id="work">
			<div
				className="slider"
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				{data.map((d) => (
					<div className="container">
						<div className="item">
							<div className="left">
								<div className="leftContainer">
									<div className="imgContainer">{d.icon}</div>
									<h2>{d.title}</h2>
									<p>{d.desc}</p>
									{/* <span>Projects</span> */}
								</div>
							</div>
							<div className="right">
								<img src={d.img} alt="" />
							</div>
						</div>
					</div>
				))}
			</div>
			<ArrowForwardIos
				className="arrow right"
				onClick={() => handleClick("right")}
			/>
			<ArrowBackIos
				className="arrow left"
				onClick={() => handleClick("left")}
			/>
		</div>
	);
}
