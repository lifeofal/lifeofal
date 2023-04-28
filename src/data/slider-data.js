import { Book, LocalCafe, School } from "@mui/icons-material";

export const data = [
	{
		id: 1,
		icon: <School className="icon"/>,
		title: "Teaching Assistant",
		desc: "During my time at KSU, I was fortunate enough to work along side many Graduate Professors to help fellow students learn and master the complex world that is programming",
		img: "assets/slider/tutoringBuilding.jpg",
		flex: true,
	},
	{
		id: 2,
		icon: <LocalCafe className="icon"/>,
		title: "Skills",
		desc: "As a software engineer, I have gained experience in various programming languages and web technologies such as Java, Python, C#, JavaScript, Velocity, XSLT, Bootstrap, SpringBoot, and Apache Camel. Additionally, I have experience with AWS Systems, SQL, CI/CD, Agile Methodologies such as SCRUM, Postman, and Unit Testing (Mockito). I am also fluent in both Spanish and English. With my knowledge and expertise, I have been able to develop Rest APIs and socket integrations for ERP/Commerce systems, improved warehouse management software, and developed cloud-based supply chain apps for retailers, distributors, and branch companies.",
		// img: "assets/slider/collage.jpg",
		flex: false,
	},
	{
		id: 3,
		icon: <Book className="icon"/>,
		title: "About Me",
		desc: "When I'm not busy coding, I love to grab my camera and capture the world around me. Photography and videography have been my passion for years, even before I wrote my first line of code. In fact, I used to work as a freelance photographer and videographer before becoming a software engineer. I'm always looking for ways to combine my two passions and create something awesome!",
		img: "assets/slider/bgcollage.JPG",
		flex: true,
	},
];
