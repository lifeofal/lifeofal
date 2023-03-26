import React, { useState } from "react";
import "./modal.scss";
import ReactDom from "react-dom";
import api from "../../rest/axiosConfig.js";

function Modal({ open, children, onClose }) {
	const [text, setText] = useState("");
	const [charCount, setCharCount] = useState(0);

	const [email, setEmail] = useState("");
	const [fullName, setFullName] = useState("");
	const [link, setLink] = useState("");
	const [testimonial, setTestimonial] = useState("");

	const handleEmailChange = (event) => setEmail(event.target.value);

	const handleFullNameChange = (event) => setFullName(event.target.value);

	const handleLinkChange = (event) => setLink(event.target.value);

	const handleTestimonialChange = (event) => {
		const input = event.target.value;
		setTestimonial(input);
		setCharCount(input.length);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!email) {
			alert("Please enter an email address."); // display an error message if email is empty
			return;
		}
        if (!fullName) {
			alert("Please enter your full name."); // display an error message if email is empty
			return;
		}
        if (!testimonial) {
			alert("Please enter your testimonial."); // display an error message if email is empty
			return;
		}

		const formData = {
			user: {
				email: email,
				name: fullName,
				link: link
			},
			text: testimonial,

		};
		console.log(formData);

		api
			.put("testimonial/create", formData)
			.then((response) => {
				console.log(response);
				onClose();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	if (!open) return null;

	//Char Counter
	const maxChars = 250; // set your desired character limit here

	function handleInputChange(event) {
		const inputText = event.target.value;
		const inputLength = inputText.length;
		setCharCount(inputLength);
		if (inputLength <= maxChars) {
			setText(inputText);
		}
	}
	return ReactDom.createPortal(
		<>
			<div className="modal">
				<div className="screenOverlay"></div>
				<div className="container">
					{/* <div className="form">
					{children} */}
					<form onSubmit={handleSubmit}>
						<div className="emailForm">
							<input
								type="email"
								className="form-control"
								id="emailInput"
								placeholder="Email Address"
								value={email}
								onChange={handleEmailChange}
								required
							/>
						</div>
						<div className="nameForm">
							<input
								type="text"
								className="form-control"
								id="nameInput"
								placeholder="Full Name"
								value={fullName}
								onChange={handleFullNameChange}
								required
							/>
						</div>
						<div className="linkForm">
							<input
								type="text"
								className="form-control"
								id="nameInput"
								placeholder="www.website.com"
								value={link}
								onChange={handleLinkChange}
								required
							/>
						</div>
						<div className="textForm">
							<textarea
								value={testimonial}
								onChange={handleTestimonialChange}
								maxLength={maxChars}
								id="textArea"
								rows="3"
								placeholder="Testimonial"
								required
							></textarea>
						</div>
						<div className="counter">
							<p
								className="charCount"
								style={{
									color: charCount > maxChars ? "red" : "white",
								}}
							>
								{charCount}/{maxChars} characters
							</p>
						</div>
						<div className="buttons">
							<div className="left">
								<button onClick={onClose}>Close</button>
							</div>
							<div className="right">
								<button type="submit">Submit</button>
							</div>
						</div>
					</form>
					{/* </div> */}
				</div>
			</div>
		</>,
		document.getElementById("portal")
	);
}

export default Modal;
