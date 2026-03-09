import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Navbar/>
			<div className="container py-4">
				<div className="p-5 mb-4 bg-light rounded-3">
					 <div className="container-fluid py-5">
						<Jumbotron/>
						<div className="row cardphoto">
						<Card/>
						<Card/>
						<Card/>
						<Card/>
						</div>
					 </div>
				</div>
			</div>

			
		</div>
	);
};

export default Home;