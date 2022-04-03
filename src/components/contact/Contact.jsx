import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
	const [message, setMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
	};
	return (
		<div className="contact" id="contact">
			<div className="left">
				<img src="assets/contact/thumbsUp.png" alt="" />
			</div>
			<div className="right">
				<h2>Contact Me</h2>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Email" />
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="Message"
					></textarea>
					<button type="submit">Send</button>
					{message && <span>Thanks, I'll get back to you ASAP :) </span>}
				</form>
			</div>
		</div>
	);
}
