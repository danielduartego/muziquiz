import React, { Component } from "react";
import Papa from "papaparse";
import axios from "axios";

export class ParseData extends Component {
  constructor(props) {
    // Call super class
    super(props);
    // Bind this to function updateData (This eliminates the error)
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    // Get the data from csv
    // TODO: add url link to get from spotify chart https://spotifycharts.com/regional/global/daily/latest
    var csvFilePath = require("../data/csv/regional-global-daily-latest.csv");

    Papa.parse(csvFilePath, {
      header: false,
      download: true,
      skipEmptyLines: false,
      // Here this is also available. So we can call our custom class method
      complete: this.updateData,
    });
  }

  async updateData(result) {
    const data = result.data;
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    this.setState({ data: data }); // or shorter ES syntax: this.setState({ data });
    var jsonData = [];
    let track_id = "";

    for (let i = 0; i < data.length; i++) {
      if (i > 1) {
        if (data[i][4] !== undefined) {
          track_id = data[i][4].split("/")[4];
        } else {
          track_id = "";
        }

        const headers = {
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        };
        await axios
          .get(`https://api.spotify.com/v1/tracks/${track_id}`, headers)
          .then((res) => {
            this.setState({
              preview_url: res.data.preview_url,
              cover_url: res.data.album.images[0].url,
            });
          })
          .catch((err) => {
            console.log(err);
          });

        jsonData[i] = {
          track_name: data[i][1],
          artist: data[i][2],
          track_id: track_id,
          preview_url: this.state.preview_url,
          cover_url: this.state.cover_url,
        };
      }
    }

    console.log(JSON.stringify(jsonData));
  }

  render() {
    return <div>Parsing data</div>;
  }
}

export default ParseData;
