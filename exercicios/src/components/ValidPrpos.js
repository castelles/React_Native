import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const ValidarProps = (props) => (
  <Text style={{fontSize: 35}}>
    {props.label || 'Opa '}
    {props.year + 2000}
  </Text>
);

ValidarProps.defaultProps = {
  label: 'Ano: ',
};

ValidarProps.propTypes = {
  year: PropTypes.number.isRequired,
};

export default ValidarProps;
