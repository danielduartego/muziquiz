import React, { Component, Fragment } from "react";
import axios from "axios";
import hash from "./hash";
import Options from "./Options";
import Countdown from "react-countdown";

export class Callback extends Component {
  state = {
    name: "",
    mp3Audio: "",
    played: "",
    option_1: "",
    option_2: "",
    option_3: "",
    preview_url: "",
    cover_url: "",
    showOptions: false,
  };

  componentDidMount() {
    this.getToken();
    this.getData();
  }

  async getData() {
    const data = require("../data/json/tracks.json");
    //Random get 3 tracks to compare
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

  playAudio() {
    // Play the audio
    console.log("playing...");

    this.state.mp3Audio.play();
    // Stop after 15 seconds
    setTimeout(
      function () {
        console.log("pause");
        this.state.mp3Audio.pause();
        this.setState({
          showOptions: true,
        });
      }.bind(this),
      5000
    );
  }

  getToken() {
    if (!localStorage.token && localStorage.token === undefined) {
      let _token = hash.access_token;
      localStorage.setItem("token", hash.access_token);
      console.log("agora tem", localStorage.token);
      if (_token) {
        this.getCurrentlyPlaying(_token);
      }
    } else {
      this.getCurrentlyPlaying(localStorage.token);
      console.log("sempre teve", localStorage.token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    const headers = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .get("https://api.spotify.com/v1/me", headers)
      .then((res) => {
        this.setState({
          name: res.data.display_name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { name, played, option_1, option_2, option_3 } = this.state;
    const options = [option_1, option_2, option_3];
    //Shuffle options
    options.sort(() => Math.random() - 0.5);

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

    let optionsMarkup = this.state.showOptions ? (
      <Options options={options} played={played} />
    ) : null;

    let countdownMarkup = this.state.showOptions ? (
      <Countdown date={Date.now() + 7000} renderer={renderer} />
    ) : null;

    return (
      <Fragment>
        <h2>Hi, {name}</h2>
        {optionsMarkup}
        {countdownMarkup}

        <button onClick={() => this.state.mp3Audio.play()}>play</button>
        <button onClick={() => this.state.mp3Audio.pause()}>pause</button>
      </Fragment>
    );
  }
}

export default Callback;
