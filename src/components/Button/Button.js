import React from 'react';
import PropTypes from 'prop-types';
import ButtonWrapper from './Button.styles';

const Button = ({ children, ...props }) => (
  <ButtonWrapper {...props}>
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
