
import {LinkedIn, Instagram, Facebook, Computer, Face, Work} from "@mui/icons-material"
export const data = [
	{
		id: 1,
		icon: <Computer className="left"/>, 
		title: "Cool Guy",
		desc: "here is some place holder text. trying to see the flexability of mobile containers",
		user: "assets/testimonials/users/tests/test1.png",
		name: "Bob Joe",
		link: <a href=""> <LinkedIn className="left"/></a>,
	},
	{
		id: 2,
		icon: <Face className="left"/>,
		title: "Cool Guy",
		desc: "here is some place holder text. trying to see the flexability of mobile containers",
		user: "assets/testimonials/users/tests/test2.png",
		name: "Bob Joe",
		link: <a href=""> <Instagram className="left"/></a>,
	},
	{
		id: 3,
		icon: <Work className="left"/>,
		title: "Cool Guy",
		desc: "here is some place holder text. trying to see the flexability of mobile containers",
		user: "assets/testimonials/users/tests/test3.png",
		name: "Bob Joe",
		link: <a href=""> <Facebook className="left"/></a>,
	},
];
