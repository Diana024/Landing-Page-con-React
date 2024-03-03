import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home =() => {
	return (
		<>
		<Navbar/>
		<div className="container">
		<section>
		<Jumbotron/>
		</section>
			<div className="container">
				<div className="row justify-content-between">
					<Card image= "https://i.pinimg.com/736x/72/fd/19/72fd197a68d6a20315f0b46cecdf8cf9.jpg"
					title="Greeting"/>
					<Card image= "https://www.areahumana.es/wp-content/uploads/2016/03/adiccion-a-internet-portada-600x600.jpg?p=13858"
					title="Opportunities"/>
					<Card image= "https://www.shutterstock.com/image-vector/cute-cartoon-owl-reading-book-600nw-2250152157.jpg"
					title="Studying"/>
					<Card image= "https://www.elmueble.com/medio/2023/08/23/de-hierro-y-madera_94293d3b_230823040141_600x600.jpg"
					title="Tranquillity"/>
				</div>
			</div>
		</div>	
		<Footer/>
		</>
		
	);
};
export default Home;
