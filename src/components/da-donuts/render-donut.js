import React, { useState } from "react";

const RenderDonut = props => {
  console.log(props.donut.name);

  const handleUpdateButtonClick = () => {
    props.changeApiMethod("PATCH");
    props.setName(props.donut.name);
    props.setDescription(props.donut.description);
    props.setPrice(props.donut.price);
    props.setDonutFile(props.donut.picture);
    props.setDonutId(props.donut.id);
  };

  return (
    <div className="donut-item-wrapper">
      <div>{props.donut.name}</div>
      <div>{props.donut.description}</div>
      <div>{`$ ${props.donut.price}`}</div>
      <img src={props.donut.picture} />
      {props.showUpdate ? (
        <button type="button" onClick={() => handleUpdateButtonClick()}>
          update
        </button>
      ) : null}
    </div>
  );
};

export default RenderDonut;
