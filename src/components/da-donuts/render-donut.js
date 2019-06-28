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
  const handleDeleteButtonClick = () => {
    console.log("delete it");
    props.changeApiMethod("delete");
    props.setDonutId(props.donut.id);
  };

  return (
    <div className="donut-item-wrapper">
      <div className="donut-name">{props.donut.name}</div>
      <div className="donut-price">{`$ ${props.donut.price}`}</div>
      <div className="donut-description">{props.donut.description}</div>
      <img src={props.donut.picture} />
      {props.showUpdate ? (
        <div className="update-delete-btns-wrapper">
          <button
            className="update-delete-btns"
            onClick={() => handleUpdateButtonClick()}
          >
            Update
          </button>
          <button
            className="update-delete-btns"
            onClick={() => handleDeleteButtonClick()}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default RenderDonut;
