import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import GitHubCalendar from "react-github-calendar";
import GitInfo from 'react-git-info/macro';
import { format } from 'date-fns';


import {
	featuredPort,
	webPort,
	mobilePort,
	projectsPort,
} from "../../data/portfolio-data.js";

export default function Portfolio() {
	const [selected, setSelected] = useState("featured");
	const [data, setData] = useState([]);
	const gitInfo = GitInfo();

	// Date fns
	const date = new Date(gitInfo.commit.date)
	const formattedDate = format(date, "MM-dd-yyyy")

	const list = [
		{
			id: "featured",
			title: "Featured",
		},
		{
			id: "web",
			title: "Web Apps",
		},
		// {
		// 	id: "mobile",
		// 	title: "Mobile App",
		// },
		// {
		// 	id: "projects",
		// 	title: "Projects",
		// },
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
					<PortfolioList className='portList'
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
						<h3>{d.title}</h3>
						{d.url === undefined ? 
						<img src={d.img} alt="Looks like the path is wonky" />
						:
						<a href={d.url}>
							<img src={d.img} alt="Looks like the path is wonky" />
   						</a>
						}
					</div>
				))}
			</div>

			<div className="calendar">
				<GitHubCalendar className ="github-calendar"
					username="lifeofal"
					theme={{
						level0: "var(--level0)",
						level1: "var(--level1)",
						level2: "var(--level2)",
						level3: "var(--level3)",
						level4: "var(--level4)",
					}}
					fontSize={15}
					hideMonthLabels={true}
					
				/>
				<h3 className="commitMsg">
					Lastest commit to this website: {gitInfo.commit.message}
				</h3>
				<h3 className="commitMsg">
					Last updated on: {formattedDate}
				</h3>
				
			</div>
		</div>
	);
}
