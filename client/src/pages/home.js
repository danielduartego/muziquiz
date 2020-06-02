import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../components/icons/loading.js";

import { userContext } from "../hooks/auth";
import Profile from "../components/Profile";
import Player from "../components/Player";

import { getDataTracks } from "../data";

import styled from "styled-components/macro";
import { mixins, Main } from "../styles";

const Container = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;

// Home page, here goes the profile and player components
export class home extends Component {
  static contextType = userContext;
  state = {
    dataTracks: [],
  };

  componentDidMount() {
    // this.getData();
  }

  async getData() {
    const dataTracks = await getDataTracks();
    this.setState({ dataTracks });
  }
  render() {
    const { dataTracks } = this.state;
    const { user } = this.context;
    return (
      <Fragment>
        {user ? (
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route
              path="/player"
              component={(props) => <Player dataTracks={dataTracks} />}
            />
          </Switch>
        ) : (
          <Container>
            <Loading />
          </Container>
        )}
      </Fragment>
    );
  }
}

export default home;
