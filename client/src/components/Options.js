import React, { Component, Fragment } from "react";
import styled from "styled-components/macro";
import { theme, mixins, Main, media, Button } from "../styles";
const { colors, fontSizes } = theme;

const OptionButton = styled(Button)`
  position: absolute;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  &:hover {
    color: ${colors.black};
    background-color: ${colors.white};
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
      console.log("certo");
    } else {
      console.log("errado");
    }
  };

  render() {
    const { options } = this.props;

    //Create buttons
    const buttons = options.map((option, index) => (
      <OptionButton
        key={option.track_id}
        value={option.track_id}
        onClick={this.checkOption}
      >
        {option.track_name}
      </OptionButton>
    ));

    return <Fragment>{buttons}</Fragment>;
  }
}

export default Options;
