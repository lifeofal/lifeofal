import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

import {
	featuredPort,
	webPort,
	mobilePort,
	projectsPort,
} from "../../data/portfolio-data.js";

export default function Portfolio() {
	const [selected, setSelected] = useState("featured");
	const [data, setData] = useState([]);

	const list = [
		{
			id: "featured",
			title: "Featured",
		},
		{
			id: "web",
			title: "Web App",
		},
		{
			id: "mobile",
			title: "Mobile App",
		},
		{
			id: "projects",
			title: "Projects",
		},
	];

	useEffect(() => {
		switch (selected) {
			case "featured":
				setData(featuredPort);
				break;
			case "web":
				setData(webPort);
				break;
			case "mobile":
				setData(mobilePort);
				break;
			case "projects":
				setData(projectsPort);
				break;
			default:
				setData(featuredPort);
		}
	}, [selected]);

	return (
		<div className="portfolio" id="portfolio">
			<h1 id="portfolio-title">Portfolio</h1>
			<ul>
				{list.map((item) => (
					<PortfolioList
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
						id={item.id}
					/>
				))}
			</ul>

			<div className="container">
				{data.map((d) => (
					<div className="item">
						<img
							src={d.img}
							alt="Looks like the path is wonky"
						/>
						<h3>{d.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
}
