import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div`
  flex-direction: column;
  width: 70%;
  min-height: 60vh;
  border: 1px solid #fff;
`;
const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  height: 5vh;
  border: 0;
  border-radius: 20px;
  width: 85%;
  color: #fff;
  border: 1px solid #fff;
  margin-top: 5%;
  background-color: #000;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export class Options extends Component {
  state = {
    showResult: false,
    result: "",
  };
  checkOption = (event) => {
    const optionSelected = event.target.value;

    if (optionSelected === this.props.played.track_id) {
      this.setState({
        showResult: true,
        result: "🤩",
      });
    } else {
      this.setState({
        showResult: true,
        result: "😩",
      });
    }
  };

  render() {
    const { options } = this.props;

    //Create buttons
    const buttons = options.map((option, index) => (
      <Button
        key={option.track_id}
        value={option.track_id}
        onClick={this.checkOption}
      >
        {option.track_name}
      </Button>
    ));

    const winMessage =
      this.state.showResult === true ? (
        <h1>{this.state.result}</h1>
      ) : (
        <h1>select an option</h1>
      );

    return (
      <Content>
        {winMessage}
        {buttons}
      </Content>
    );
  }
}

export default Options;
