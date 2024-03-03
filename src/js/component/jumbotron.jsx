import React from "react";

//include images into your bundle
// import Jumbotron from"./jumbotron";

//create your first component
const Jumbotron = () => {
	return (
		<div className="jumbotron pt-1 text-start bg-secondary mb-4 rounded mx-2 my-4 px-4 pb-5">
  <h1 className="display-4 p-2">A Warm Welcome!</h1>
  <p className="lead p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil modi totam eos nulla quo, maiores dolores possimus quos eaque iure, rerum cumque alias nisi laudantium qui, assumenda culpa doloremque nostrum?.</p>
    <a className="btn btn-primary btn-lg " href="#" role="button">Call to action!</a>
  {/* </p> */}
</div>
	);
};

export default Jumbotron;