import React from 'react';
import styled from 'styled-components';

const ColorBox = styled.div`
  width: 200px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
`;

const ColorPair = ({ textColor, bgColor, children }) => (
    <ColorBox textColor={textColor} bgColor={bgColor}>
        {children}
    </ColorBox>
);

export default ColorPair;
