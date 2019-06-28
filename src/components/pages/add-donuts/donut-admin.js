import React, { useState } from "react";
import DropzoneComponent from "react-dropzone-component";

import "../../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../../node_modules/dropzone/dist/min/dropzone.min.css";
import Axios from "axios";
import request from "superagent";

import DisplayDonuts from "../../da-donuts/display-donuts";

const DonutAdmin = props => {
  const [donutName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [donut_image, setDonutFile] = useState("");
  const [donutId, setDonutId] = useState("");

  const [apiMethod, changeApiMethod] = useState("post");

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
      addedfile: file => {
        let upload = request
          .post("https://api.cloudinary.com/v1_1/do31dqixt/image/upload")
          .field("upload_preset", "cloudy-images")
          .field("file", file);
        upload.end((error, response) => {
          if (error) {
            console.log(error);
          }
          if (response) {
            setDonutFile(response.body.secure_url);
          }
        });
      }
    };
  };
  // --------------------------------------------------
  const handleNewDonutSubmission = e => {
    e.preventDefault();
    console.log(donut_image);
    console.log("something");
    Axios({
      method: apiMethod,
      url: "https://bottega-edonut-db.herokuapp.com/donut",
      data: {
        name: donutName,
        description: description,
        price: price,
        picture: donut_image,
        donutId: donutId,
        userId: props.userId
      }
    })
      .then(() => {
        console.log("you succesfully posted a DONUT!!!");
      })
      .catch(error => {
        console.log("database error: ", error.message);
      });
  };

  return (
    <div className="dz-form-wrapper">
      <form
        className="dz-form-input"
        onSubmit={e => handleNewDonutSubmission(e)}
      >
        <input
          className="dz-input"
          type="text"
          placeholder="Donut Name"
          value={donutName}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="dz-input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          className="dz-input"
          type="text"
          placeholder="Price (no $ signs)"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <DropzoneComponent
          className="dz-image"
          ref={donutRef}
          config={componentConfig()}
          djsConfig={djsConfig()}
          eventHandlers={handleDonutDrop()}
        >
          <div className="dz-message">Donut Picture</div>
        </DropzoneComponent>
        <button className="dz-btn" type="submit">
          save
        </button>
      </form>
      <DisplayDonuts
        showUpdate={true}
        changeApiMethod={changeApiMethod}
        setName={setName}
        setDescription={setDescription}
        setPrice={setPrice}
        setDonutFile={setDonutFile}
        setDonutId={setDonutId}
      />
    </div>
  );
};

export default DonutAdmin;
