import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.span`
display: inline-block;
flex 1 0;
font-size: 2rem;
 text-align: ${props => props.align};
`;

const Label = ({ text, align }) => (
  <StyledLabel align={align}>{text}</StyledLabel>
);

Label.propTypes = {
  align: Proptypes.string,
  text: Proptypes.string.isRequired,
};

Label.defaultProps = {
  align: 'left',
};

export default Label;
