import React, { useState } from "react";

const RenderDonut = props => {
  console.log(props.donut.name);
  return (
    <div className="donut-item-wrapper">
      <div className="donut-name">{props.donut.name}</div>
      <div className="donut-price">{`$ ${props.donut.price}`}</div>
      <div className="donut-description">{props.donut.description}</div>
      <img src={props.donut.picture} />
      <div className="update-delete-btns-wrapper">
        <button className="update-delete-btns">Update</button>
        <button className="update-delete-btns">Delete</button>
      </div>
    </div>
  );
};

export default RenderDonut;
