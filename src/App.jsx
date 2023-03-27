// import Topbar from "./components/topbar/Topbar";
// import Intro from './components/intro/Intro';
import {
	TopBar,
	Intro,
	Portfolio,
	Testimonials,
	Contact,
	Work,
} from "./components/componentIndex";

import "./App.scss";

import { useEffect, useState } from "react";

import Menu from "./components/menu/Menu";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/themes/Theme";

import api from "./rest/axiosConfig.js";


function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	//const [displayMode, setDisplayMode] = useState(true); //true light false dark

	const [testimObj, setTestimonials] = useState();

	const [theme, setTheme] = useState("dark");

	const getTestimonials = async () => {
		try {
			const response = await api.get("/testimonial/approved/threeRandom");
			console.log(response.data);
			setTestimonials(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getTestimonials();
	}, []);

	const themeToggler = () => {
		console.log(theme);
		theme === "light" ? setTheme("dark") : setTheme("light");
	};


	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			{/* <StyledApp> */}
			<div className="app">
				<TopBar
					open={menuOpen}
					setOpen={setMenuOpen}
					value={theme}
					setTheme={themeToggler}
				/>
				<Menu open={menuOpen} setOpen={setMenuOpen} />

				<div className="sections">
					<Intro />
					<Portfolio />
					<Work />
					{/* <Testimonials /> */}

					<Testimonials testimObj={testimObj} />

					<Contact />
				</div>
			</div>
			{/* </StyledApp> */}
		</ThemeProvider>
	);
}

export default App;
