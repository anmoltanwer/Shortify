import styled from "../styles/inputField.module.css";
import axios from "axios";
import React, { Component } from "react";
import { render } from "react-dom";

class inputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://api.shrtco.de/v2/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  shortIt() {}
  render() {
    const { imageURL } = this.state;

    return (
      <div className={styled.mainDiv}>
        <input id="link" type={imageURL} />
        <button onClick={this.updateSetState} className={styled.shortIt}>
          Shorten it!
        </button>
      </div>
    );
  }
}

export default inputField;
