import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
display: inline-block;
flex 1 0;
font-size: 2rem;
 text-align: ${props => props.align};
`;

export default ({ text, align = 'left' }) => (
  <Label align={align}>{text}</Label>
)
