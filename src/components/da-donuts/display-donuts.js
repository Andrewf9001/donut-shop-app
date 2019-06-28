import React, { useState, useEffect } from "react";
import axios from "axios";
import RenderDonut from "./render-donut";

const DisplayDonuts = props => {
  const [donutArray, fillDonut] = useState([]);

  const displayDonuts = () => {
    return donutArray.map((donut, index) => {
      return (
        <RenderDonut
          showUpdate={props.showUpdate}
          key={index}
          donut={donut}
          changeApiMethod={props.changeApiMethod}
          setName={props.setName}
          setDescription={props.setDescription}
          setPrice={props.setPrice}
          setDonutFile={props.setDonutFile}
          setDonutId={props.setDonutId}
        />
      );
    });
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://bottega-edonut-db.herokuapp.com/inventory"
    })
      .then(response => {
        fillDonut(response.data);
      })
      .catch(error => {
        console.log("nutty error");
      });
  }, []);

  return (
    <div className="small-donut-cards">
      <h1>hey</h1>
      {displayDonuts()}
    </div>
  );
};

export default DisplayDonuts;
