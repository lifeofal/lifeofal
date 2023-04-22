import React, { useEffect } from "react";
import "./intro.scss";
import { consoleText } from "./intro.js";
import { ArrowCircleDown } from "@mui/icons-material";

export default function Intro() {
	useEffect(() => {
		console.log("Render");
		consoleText(
			["Software Engineer.", "Photographer.", "Adventurer."],
			"text",
			["white"]
		);
	}, []);

	return (
		<div className="intro" id="intro">
			<video autoPlay muted loop id="myVideo">
				<source src="assets/intro/Website_BG.mp4" type="video/mp4" />
			</video>
			<div className="left">
				<div className="imgContainer">
					<img src="assets/profile-modified.png" alt="My face" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hello Friend, I'm</h2>
					<h1>Alejandro Cervantes</h1>
					{/* <h3>Software Engineer</h3> */}
					<div className="console-container">
						<span id="text"></span>
						<div className="console-underscore" id="console">
							&#95;
						</div>
					</div>
				</div>
				<a href="#portfolio">
					<ArrowCircleDown className="ArrowCircleDown" />
				</a>
			</div>
		</div>
	);
}
