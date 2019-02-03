import React, { Component } from "react";

export default class NewTweet extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    const text = e.target.value;
    this.setState(() => ({
      text
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    //todo: Add tweet to store

    console.log("New Tweet: ", text);
    this.setState(() => {
      text: "";
    });
  };
  render() {
    return <div>New Tweet</div>;
  }
}
