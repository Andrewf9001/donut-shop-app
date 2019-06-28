import React, { useState } from "react";

const RenderDonut = props => {
  console.log(props.donut.name);

  return (
    <div className="donut-item-wrapper">
      <div>{props.donut.name}</div>

      <div>{props.donut.description}</div>
      <div>{`$ ${props.donut.price}`}</div>
      <img src={props.donut.picture} />
      {props.showUpdate ? (
        <button type="button" onClick={() => handleUpdateButtonClick}>
          update
        </button>
      ) : null}
    </div>
  );
};

export default RenderDonut;
