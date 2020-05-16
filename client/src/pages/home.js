import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../components/icons/loading.js";
import { getUserInfo } from "../spotify";
import { catchErrors } from "../utils";
import styled from "styled-components/macro";
import { mixins, Main } from "../styles";
import Profile from "../components/Profile";
import Player from "../components/Player";

const Container = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;

// Home page, here goes the profile and player components
export class home extends Component {
  state = {
    user: null,
    points: 0,
  };

  componentDidMount() {
    catchErrors(this.getData());
  }

  async getData() {
    const { user } = await getUserInfo();
    this.setState({ user });
  }
  render() {
    const { user, points } = this.state;
    return (
      <Fragment>
        {user ? (
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <Profile user={user} points={points} />}
            />
            <Route
              path="/player"
              component={(props) => <Player user={user} points={points} />}
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
