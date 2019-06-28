import React, { useState, useEffect } from "react";
import axios from "axios";
import RenderDonut from "../../da-donuts/render-donut";

const DisplayDonutsSmall = () => {
  const [donutArray, fillDonut] = useState([]);

  const displayDonuts = () => {
    return donutArray.map((donut, index) => {
      return <RenderDonut key={index} donut={donut} />;
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
    <div>
      <h1>hey</h1>
      {displayDonuts()}
    </div>
  );
};

export default DisplayDonutsSmall;
