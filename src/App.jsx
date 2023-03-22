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

// import "./components/intro/intro.js";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	//const [displayMode, setDisplayMode] = useState(true); //true light false dark

	const [theme, setTheme] = useState("dark");

	const themeToggler = () => {
		console.log(theme);
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	// useEffect(() => {
	// 	console.log("render in app");
	// });

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
					<Testimonials />
					<Contact />
				</div>
			</div>
			{/* </StyledApp> */}
		</ThemeProvider>
	);
}

export default App;
