import React, { Component } from "react";
import LogoIcon from "./icons/logo.js";
import Countdown from "react-countdown";
import styled from "styled-components/macro";
import { theme, mixins, Main, media, Button } from "../styles";
const { colors, fontSizes } = theme;

const Container = styled(Main)`
  ${mixins.flexCenter};
  min-height: 100%;
  flex-direction: column;
  // border: 1px solid #fff;
`;

const PointsContainer = styled.div`
  // width: 100%;
  h1 {
    margin-bottom: auto;
    font-size: ${fontSizes.lg};
    font-weight: 700;
    ${media.tablet`
        font-size: ${fontSizes.sm};
      `};
    ${media.phablet`
        font-size: 8vw;
      `};
  }
  h2 {
    margin: -5px 5px 50px 0px;
    font-weight: 400;
    font-size: ${fontSizes.xl};
    color: ${colors.green};
    display: inline-block;
  }
  h6 {
    display: inline-block;
    font-weight: 400;
    color: ${colors.grey};
    font-size: ${fontSizes.sm};
    text-transform: uppercase;
  }
`;

const StatusContainer = styled.div`
  ${mixins.flexCenter};
  // border: 1px solid #fff;
  height: 300px;
  width: 300px;
`;

const ActionContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  // border: 1px solid #fff;
  height: 400px;
  width: 400px;
`;

const AnswerButton = styled(Button)`
  bottom: 0;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  &:hover {
    color: ${colors.black};
    background-color: ${colors.white};
  }
`;

export class Player extends Component {
  state = {
    name: "",
    mp3Audio: "",
    played: "",
    option_1: "",
    option_2: "",
    option_3: "",
    preview_url: "",
    cover_url: "",
    playing: false,
    showOptions: false,
  };

  componentDidMount() {
    this.getData();
  }
  //Random get 3 tracks to compare
  async getData() {
    const data = require("../data/json/tracks.json");
    // TODO: fix sometimes get same result
    let option_1 = data[Math.floor(Math.random() * data.length)];
    let option_2 = data[Math.floor(Math.random() * data.length)];
    let option_3 = data[Math.floor(Math.random() * data.length)];
    await this.setState({
      played: option_1,
      option_1: option_1,
      option_2: option_2,
      option_3: option_3,
      cover_url: option_1.cover_url,
      mp3Audio: new Audio(option_1.preview_url),
    });

    console.log("should play >>", option_1.track_name);
    this.playAudio();
  }

  // Play the mp3Audio
  playAudio() {
    console.log("playing...");
    // this.state.mp3Audio.play();
    this.setState({
      playing: true,
    });
    // Stop after 15 seconds
    setTimeout(
      function () {
        console.log("pause");
        this.state.mp3Audio.pause();
        this.setState({
          playing: false,
          showOptions: true,
        });
      }.bind(this),
      2000
    );
  }

  // Check option
  checkOption = (event) => {
    const optionSelected = event.target.id;

    if (optionSelected === this.state.played.track_id) {
      console.log("certo");
    } else {
      console.log("errado");
    }
  };

  render() {
    const { user, points } = this.props;
    const { option_1, option_2, option_3 } = this.state;
    const options = [option_1, option_2, option_3];
    //Shuffle options
    options.sort(() => Math.random() - 0.5);

    const buttons = options.map((option, index) => (
      <AnswerButton
        key={option.track_id}
        id={option.track_id}
        onClick={this.checkOption}
      >
        {option.track_name}
      </AnswerButton>
    ));

    const renderer = ({ seconds, completed }) => {
      if (completed) {
        // Render a complete state

        this.setState({
          showOptions: false,
        });
        return null;
      } else {
        // Render a countdown
        return <h1>{seconds}</h1>;
      }
    };

    return (
      <Container>
        <PointsContainer>
          <h1>{user.display_name}</h1>
          <h2>{points}</h2>
          <h6>Points</h6>
        </PointsContainer>

        <StatusContainer>
          {this.state.playing ? <LogoIcon /> : null}
          {this.state.showOptions ? (
            <Countdown date={Date.now() + 7000} renderer={renderer} />
          ) : null}
        </StatusContainer>

        <ActionContainer>
          {this.state.playing ? <AnswerButton>Answer now</AnswerButton> : null}
          {this.state.showOptions ? buttons : null}
        </ActionContainer>
      </Container>
    );
  }
}

export default Player;
