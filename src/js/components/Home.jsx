import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container py-4">
				<div className="p-5 mb-4 bg-light rounded-3">
					<div className="container-fluid py-5">
						<Jumbotron />
						<div className="row g-4">
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</div>
			</div>
			<Footer />


		</div>
	);
};

export default Home;