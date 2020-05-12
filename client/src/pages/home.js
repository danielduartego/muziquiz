import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "../components/Profile";
import Player from "../components/Player";

import styled from "styled-components/macro";
import { mixins, Main } from "../styles";

const Container = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;

// Home page, here goes the profile and player components
export class home extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/player" component={Player} />
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default home;
