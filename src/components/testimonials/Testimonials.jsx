import React from "react";
import "./testimonials.scss";
import {data} from "../../data/testimonial-data.js"

export default function Testimonials() {
	return (
		<div className="testimonials" id="testimonials">
			<h1>Testimonials</h1>
			<div className="container">
				{data.map((d) => (
					<div className={d.id === 2 ? "card featured" : "card"}>
						<div className="top">
							{d.icon}
							<img src={d.user} alt="user" className="user" />
							{d.link}
						</div>
						<div className="center">
							{d.desc}
						</div>
						<div className="bottom">
							<h3>{d.name}</h3>
							<h4>{d.title}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
