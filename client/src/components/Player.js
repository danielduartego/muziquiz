import React, { Component } from "react";
import LogoIcon from "./icons/logo.js";
import ArrowUp from "../styles/ArrowUp";
import ArrowDown from "../styles/ArrowDown";
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
  // TODO: understand contructor
  constructor() {
    super();
    this.timer = null;
    this.state = {
      name: "",
      mp3Audio: "",
      played: "",
      option_1: "",
      option_2: "",
      option_3: "",
      options: [],
      preview_url: "",
      cover_url: "",
      playing: false,
      showOptions: false,
      showCountdown: false,
      showNewPoints: false,
      showArroUp: Boolean,
      userPoints: null,
    };
  }

  componentDidMount() {
    const { points } = this.props;
    this.setState({
      userPoints: points,
    });
    this.getData();
  }

  //Random get 3 tracks to compare
  getData = async () => {
    const data = require("../data/json/tracks.json");
    // TODO: fix sometimes get same result
    let option_1 = data[Math.floor(Math.random() * data.length)];
    let option_2 = data[Math.floor(Math.random() * data.length)];
    let option_3 = data[Math.floor(Math.random() * data.length)];
    let options = [option_1, option_2, option_3].sort(
      () => Math.random() - 0.5
    );
    await this.setState({
      played: option_1,
      option_1: option_1,
      option_2: option_2,
      option_3: option_3,
      options: options,
      cover_url: option_1.cover_url,
      mp3Audio: new Audio(option_1.preview_url),
    });
    console.log("should play >>", option_1.track_name);
    this.playAudio();
  };

  // Play the mp3Audio
  playAudio = () => {
    console.log("playing...");
    // this.state.mp3Audio.play();
    this.setState({
      playing: true,
    });
    this.timer = setTimeout(
      function () {
        console.log("pause");
        this.state.mp3Audio.pause();
        this.setState({
          playing: false,
          showOptions: true,
          showCountdown: true,
        });
      }.bind(this),
      // TODO: change here for the desire time, 15s = 15000
      5000
    );
  };

  // When click to answer now
  answerNow = () => {
    console.log("paused from answerNow");
    this.state.mp3Audio.pause();
    this.setState({
      playing: false,
      showOptions: true,
      showCountdown: true,
    });
    clearTimeout(this.timer);
  };

  // Check option selected
  checkOption = (event) => {
    let idSelected = event.target.id;
    if (idSelected === this.state.played.track_id) {
      this.showAnswer(true);
    } else {
      this.showAnswer(false);
    }
  };

  // Show the answer, true or false
  showAnswer = (answer) => {
    // Fisrt we stop the countdown and display the options
    this.setState({
      showCountdown: false,
      showNewPoints: true,
    });

    // Wrong option, apply style to buttons
    var elements = document.getElementsByClassName("optionButton");
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].setAttribute(
        "style",
        "background-color:#EB1E32; border:1px solid #EB1E32; pointer-events:none;"
      );
    }

    // Right option, apply style to the button
    document
      .getElementById(this.state.played.track_id)
      .setAttribute(
        "style",
        "background-color:#1DB954; border: 1px solid #1DB954; pointer-events:none;"
      );

    // This add the points to user
    if (answer) {
      this.setState({
        userPoints: this.state.userPoints + 5,
        showArroUp: true,
      });
    } else {
      this.setState({
        userPoints: this.state.userPoints - 2,
        showArroUp: false,
      });
    }
  };

  // Display next option
  getNextOption = () => {};

  render() {
    const { user } = this.props;
    const {
      userPoints,
      showOptions,
      showCountdown,
      options,
      playing,
      showNewPoints,
      showArroUp,
    } = this.state;

    // Generate 3 buttons with response options
    const buttons = options.map((option, index) => (
      <AnswerButton
        key={option.track_id}
        id={option.track_id}
        onClick={this.checkOption}
        className="optionButton"
      >
        {option.track_name}
      </AnswerButton>
    ));

    // Render the countdown time
    const renderer = ({ seconds, completed }) => {
      if (completed) {
        // Render a complete state
        this.showAnswer(false);
        return null;
      } else {
        // Render a countdown
        return <h1>{seconds}</h1>;
      }
    };

    // Generate the arrow up or down
    const arrowPoints = showArroUp ? (
      <ArrowUp points="5"></ArrowUp>
    ) : (
      <ArrowDown points="2"></ArrowDown>
    );

    return (
      <Container>
        <PointsContainer>
          <h1>{user.display_name}</h1>
          <h2>{userPoints}</h2>
          <h6>Points</h6>
        </PointsContainer>

        <StatusContainer>
          {playing ? <LogoIcon /> : null}
          {showCountdown ? (
            <Countdown date={Date.now() + 10000} renderer={renderer} />
          ) : null}
          {showNewPoints ? arrowPoints : null}
        </StatusContainer>

        <ActionContainer>
          {playing ? (
            <AnswerButton onClick={this.answerNow}>Answer now</AnswerButton>
          ) : null}
          {showOptions ? buttons : null}
        </ActionContainer>
      </Container>
    );
  }
}

export default Player;
