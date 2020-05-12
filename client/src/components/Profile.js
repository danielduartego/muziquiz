import React, { Component, Fragment } from "react";
import styled from "styled-components/macro";

import { getUserInfo } from "../spotify";
import { catchErrors } from "../utils";
import IconUser from "./icons/user.js";
import { theme, mixins, Main, media, Button } from "../styles";
const { colors, fontSizes, spacing } = theme;

const Container = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  img {
    border-radius: 50%;
    min-width: 100%;
    min-height: 100%;
  }
`;

const NoAvatar = styled.div`
  border: 3px solid #1db954;
  border-radius: 100%;
  padding: ${spacing.md};
`;

const Name = styled.h1`
  font-size: ${fontSizes.xxl};
  font-weight: 700;
  ${media.tablet`
    font-size: ${fontSizes.xl};
  `};
  ${media.phablet`
    font-size: 8vw;
  `};
`;

const PointsContainer = styled.div`
  margin: 0 0 50px 0;
  text-align: center;
  h1 {
    font-weight: 400;
    font-size: ${fontSizes.xxl};
    margin: -5px 0;
    color: ${colors.green};
  }
  h6 {
    font-weight: 400;
    color: ${colors.grey};
    font-size: ${fontSizes.lg};
    text-transform: uppercase;
  }
`;

const StartButton = styled(Button)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  &:hover {
    color: ${colors.black};
    background-color: ${colors.white};
  }
`;

export class Profile extends Component {
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
      <Container>
        {user ? (
          <Fragment>
            <Avatar>
              {user.images.length > 0 ? (
                <img src={user.images[0].url} alt="avatar" />
              ) : (
                <NoAvatar>
                  <IconUser />
                </NoAvatar>
              )}
            </Avatar>
            <Name>{user.display_name}</Name>
            <PointsContainer>
              <h1>{points}</h1>
              <h6>Points</h6>
            </PointsContainer>
            <StartButton>Let's Play</StartButton>
          </Fragment>
        ) : (
          <p>loading...</p>
        )}
      </Container>
    );
  }
}

export default Profile;
