import React, { useState } from "react";
import DropzoneComponent from "react-dropzone-component";

import "../../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../../node_modules/dropzone/dist/min/dropzone.min.css";
import Axios from "axios";

const DonutAdmin = props => {
  const [donutName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [donut_image, setDonutFile] = useState("");

  const donutRef = React.createRef();

  const componentConfig = () => {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  };

  const djsConfig = () => {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  };

  const handleDonutDrop = () => {
    return {
      addedfile: file => setDonutFile(file)
    };
  };

  const handleNewDonutSubmission = e => {
    e.preventDefault();
    console.log(donut_image.dataURL);
    console.log("something");
    Axios({
      method: "POST",
      url: "https://api.cloudinary.com/v1_1/do31dqixt/image/upload",
      data: donut_image.dataURL
    })
      .then(response => {
        console.log(response.secure_url);
        let earle = response.secure_url;
        Axios({
          method: "POST",
          url: "https://bottega-edonut-db.herokuapp.com/donut",
          data: {
            name: donutName,
            description: description,
            price: price,
            picture: earle,
            userId: 1
          }
        })
          .then(response => {
            console.log("you succesfully posted a DONUT!!!");
          })
          .catch(error => {
            console.log("database error: ", error.message);
          });
      })
      .catch(error => {
        console.log("cloudinary error: ", error.message);
      });
  };

  return (
    <div>
      <h1>hi</h1>
      <form onSubmit={e => handleNewDonutSubmission(e)}>
        <input
          type="text"
          placeholder="Donut Name"
          value={donutName}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price (no $ signs)"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <DropzoneComponent
          ref={donutRef}
          config={componentConfig()}
          djsConfig={djsConfig()}
          eventHandlers={handleDonutDrop()}
        >
          <div className="dz-message">Donut Picture</div>
        </DropzoneComponent>
        <button type="submit">save</button>
      </form>
      {props.name} {props.userId}
    </div>
  );
};

export default DonutAdmin;
