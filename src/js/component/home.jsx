import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";



//create your first component
const Home = () => {
	return (
		<>  //todas las etiquetas
		<Navbar/>
		<div className="text-center">
		<Jumbotron/>
			<div className="d-flex">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
		</div>
		<Footer/>

		</>
	);
};

export default Home;
