import React, { useState } from "react";
import "./contact.scss";
import { GitHub, Mail, Brightness4 } from "@mui/icons-material";

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
				{/* TO DO: Add in form that connects to back end. MONGODB?? */}
				{/* <form onSubmit={handleSubmit}>
					<input type="text" placeholder="Email" />
					<textarea
						placeholder="Message"
					></textarea>
					<button type="submit">Send</button>
					{message && <span>Thanks, I'll get back to you ASAP :) </span>}
				</form> */}
				<h2>Contact Me!</h2>
				<div className="itemContainer">
					<GitHub className="icon" />
					<span>
						<a href="https://github.com/lifeofal">LifeOfAl</a>
					</span>
				</div>
				<div className="itemContainer">
					<Mail className="icon" />
					<span>acervan.work@gmail.com</span>
				</div>
			</div>
		</div>
	);
}
