import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import React from 'react';
import styleVars from '../styleVars';

const LinearBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={[styleVars.green600, styleVars.green200]}
      start={[0, 0.5]}
      end={[1.1, 0.5]}
      style={{flex: 1, width: '100%'}}
    >
      {children}
    </LinearGradient>
  );
};

LinearBackground.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LinearBackground;
