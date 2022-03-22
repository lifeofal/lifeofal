import React, { useRef } from "react";
import "./topbar.scss";
import { GitHub, Mail, Brightness4 } from "@mui/icons-material";

export default function Topbar({ open, setOpen, value, setTheme }) {
	const themeToggler = () => {
		//onChange.theme === "light" ? themeTog.setTheme("dark") : themeTog.setTheme("light");
		setTheme();
	};
	return (
		<div className={"topbar " + (open && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						hellofriend.
					</a>
					<div className="itemContainer">
						<GitHub className="icon" />
						<span>
							<a href="https://github.com/lifeofal">GitHub</a>
						</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>acervan.work@gmail.com</span>
					</div>
				</div>
				<div className="right">
					<div className="right-wrapper">
						<div className="itemContainer">
							<Brightness4 className="icon" onClick={themeToggler} />
						</div>
						{/* <DisplayMode onClick={() => setDisplayMode(!displayMode)} /> */}
						<div className="hamburger" onClick={() => setOpen(!open)}>
							<span className="line1"></span>
							<span className="line2"></span>
							<span className="line3"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
