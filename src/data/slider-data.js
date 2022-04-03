import { Book, LocalCafe, School } from "@mui/icons-material";

export const data = [
	{
		id: 1,
		icon: <School className="icon"/>,
		title: "Teaching Assistant",
		desc: "During my time at KSU, I was fortunate enough to work along side many Graduate Professors to help fellow students learn and absorbs the complex and expansive world that is programming",
		img: "assets/slider/tutoringBuilding.jpg",
	},
	{
		id: 2,
		icon: <LocalCafe className="icon"/>,
		title: "Skills",
		desc: "Through out the years, I have used many technologies to achieve my end goals with my various projects: Java | C# | Python | HTML | CSS | JavaScript (jQuery)| Django | Bootstrap | Springboot | Swift | XCode| Cloud Firestore NoSQL | Cocoa Pods",
		img: "assets/slider/collage.jpg",
	},
	{
		id: 3,
		icon: <Book className="icon"/>,
		title: "About Me",
		desc: "Passionate software engineer with experience in Java, C#, front end technologies and OOP design. Excels in team-based environments with great communication skills and fluent in both English and Spanish.",
		img: "assets/slider/aboutMe.jpg",
	},
];
