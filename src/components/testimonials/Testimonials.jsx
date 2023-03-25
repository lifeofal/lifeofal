import React, { useState } from "react";
import "./testimonials.scss";
import { data } from "../../data/testimonial-data.js";
import Modal from "../modal/Modal.jsx";

export default function Testimonials({ testimObj }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="testimonials" id="testimonials">
			<h1>Testimonials</h1>
			<button onClick={() => setIsOpen(true)}>Submit a Testimonial!</button>
			<Modal open={isOpen} onClose={() => setIsOpen(false)} />
			<div className="container">
				{/* {data.map((d) => (
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
				))} */}

				{testimObj?.map((obj) => {
					const randomId = Math.floor(Math.random() * 3) + 1;
					return (
						<div
							className={randomId === 2 ? "card featured" : "card"}
							key={obj.id}
						>
							{/* <div className="top">
								{d.icon}
								<img src={d.user} alt="user" className="user" />
								{d.link}
							</div> */}
							<div className="center">
								<p>{obj.text}</p>
							</div>
							<div className="bottom">
								<h3>{obj.user.name}</h3>
								<h4>{obj.user.title}</h4>
								<a href={obj.user.link}>
									<h5>{obj.user.link}</h5>
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
