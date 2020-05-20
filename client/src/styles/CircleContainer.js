import React from "react";
import styled from "styled-components/macro";
import { mixins } from ".";

const CircleContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  border-radius: 100%;
  width: 250px;
  height: 250px;
`;

export default ({ children, color }) => (
  <CircleContainer style={{ border: `2px solid ${color}` }}>
    {children}
  </CircleContainer>
);
