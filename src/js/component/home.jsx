import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		<div className="d-flex col-9 justify-content-center mx-auto">
			<Card/><Card/><Card/><Card/>
			</div>
		<Footer/>
		</>
	);
};

export default Home;
