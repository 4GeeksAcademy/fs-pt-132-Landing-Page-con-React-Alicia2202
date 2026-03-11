import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	const GalleryData = [
		{
			url:'https://picsum.photos/id/237/200/300',
			title: 'The first',
			description:'Amazing card'
		},

		{
			url:'https://picsum.photos/id/238/200/300',
			title: 'The second',
			description:'This card is incredible'
		},
		{
			url:'https://picsum.photos/id/239/200/300',
			title: 'The third',
			description:'The best card ever'
		},
		{
			url:'https://picsum.photos/id/240/200/300',
			title: 'The fourth',
			description:'You never believe'
		}
	];
	return (
		<div className="text-center">
			<Navbar />
			<div className="container py-4">
				<div className="p-5 mb-4 bg-light rounded-3">
					<div className="container-fluid py-5">
						<Jumbotron />
						<div className="row g-4">
							{
								GalleryData.map((el,i)=> <div key={i} className="col-lg-3 col-md-6 col-sm-12"> 
								<Card url= {el.url} title={el.title} description={el.description} />
								</div> )
							}
							
						</div>
					</div>
				</div>
			</div>
			<Footer />


		</div>
	);
};

export default Home;