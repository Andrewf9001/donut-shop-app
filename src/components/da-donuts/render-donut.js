import React, { useState } from "react";

const RenderDonut = props => {
  console.log(props.donut.name);

  return (
    <div className="donut-card">
      <div>{props.donut.name}</div>
      <div>{props.donut.description}</div>
      <div>{`$ ${props.donut.price}`}</div>
      <img src={props.donut.picture} />
      <button>updat</button>
    </div>
  );
};

export default RenderDonut;
