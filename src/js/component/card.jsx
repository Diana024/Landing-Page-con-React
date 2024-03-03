import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
// import Card from "./card";

//create your first component
const Card = (props) => {
	return (
	<div className="col-12 col-md-6 col-lg-3 mb-4">
        <div className="card">
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body text-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, sequi ipsum minus ullam nam aut, modi eaque reprehenderit nesciunt cum ad voluptate sapiente neque, consequuntur omnis. </p>
        <a href={props.buttonURL} className="btn btn-primary btn-sm">Find Out More!</a>
        </div>
    </div>
</div>
	);
};

Card.propTypes ={
image: PropTypes.string,
title: PropTypes.string,
description: PropTypes.string,
buttonLabel: PropTypes.string,
buttonURL: PropTypes.string,
}

export default Card;

