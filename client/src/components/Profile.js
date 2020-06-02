import React, { Component, Fragment } from "react";
import styled from "styled-components/macro";
import IconUser from "./icons/user.js";
import Loading from "./icons/loading.js";
import { userContext } from "../hooks/auth";
import { theme, mixins, Main, media, Button } from "../styles";
const { colors, fontSizes, spacing } = theme;

const Container = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;

const Avatar = styled.div`
  width: 200px;
  height: 200px;
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
    font-size: ${fontSizes.md};
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
  static contextType = userContext;
  render() {
    const { user } = this.context;
    return (
      <Container>
        {user ? (
          <Fragment>
            <Avatar>
              {user.userPhoto ? (
                <img src={user.userPhoto} alt="avatar" />
              ) : (
                <NoAvatar>
                  <IconUser />
                </NoAvatar>
              )}
            </Avatar>
            <Name>{user.userName}</Name>
            <PointsContainer>
              <h1>{user.userPoints}</h1>
              <h6>Points</h6>
            </PointsContainer>
            <StartButton href="/player">Let's Play</StartButton>
          </Fragment>
        ) : (
          <Loading />
        )}
      </Container>
    );
  }
}

export default Profile;
