import React from "react";

//include images into your bundle


//create your first component
const Card = () => {
	return (
<div className="card col-3 m-2 w-3" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  
</div>
	);
};

export default Card;
