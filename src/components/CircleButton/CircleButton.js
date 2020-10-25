import React from 'react';
import PropTypes from 'prop-types';
import './CircleButton.css'

const CircleButton = (props) => {
   return (
      <button className='CircleButton' {...props}>
         {props.text}
      </button>
   );
};

CircleButton.propTypes = {
   text: PropTypes.string
};

export default CircleButton;
