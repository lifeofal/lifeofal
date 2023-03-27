import React, { useState } from "react";
import "./testimonials.scss";
import { data } from "../../data/testimonial-data.js";
import Modal from "../modal/Modal.jsx";

export default function Testimonials({ testimObj }) {
	const [isOpen, setIsOpen] = useState(false);
	// const [cardNumber, setCardNumber] = useState(0)
	let counter = 0;
	console.log(testimObj)

	return (
		<div className="testimonials" id="testimonials">
			<h1>Testimonials</h1>
			<button onClick={() => setIsOpen(true)}>Submit a Testimonial!</button>
			<Modal open={isOpen} onClose={() => setIsOpen(false)} />
			<div className="container">
				{testimObj?.map((obj) => {
					// const randomId = Math.floor(Math.random() * 3) + 1;
					counter++;
					return (
						<div
							className={counter === 2 ? "card featured" : "card"}
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
