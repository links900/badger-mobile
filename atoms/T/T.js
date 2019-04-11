// @flow

import styled, { css } from "styled-components";

import { Text } from "react-native";

const T = styled(Text)`
  font-size: 18;
  color: ${props =>
    props.type === "inverse" ? props.theme.bg900 : props.theme.fg100};
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
    ${props =>
      props.size === "tiny"
        ? css`
            font-size: 8;
          `
        : props.size === "xsmall"
        ? css`
            font-size: 10;
          `
        : props.size === "small"
        ? css`
            font-size: 14;
          `
        : props.size === "large" &&
          css`
            font-size: 22;
          `}
  ${props =>
    props.nature === "muted" &&
    css`
      color: ${props => props.theme.fg200};
    `}
`;

export default T;
