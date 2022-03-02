import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({color, text}) => {
    const onClick = () => {
        console.log('click');
    }



  return (
    <button 
        onClick={onClick}
        style={{backgroundColor: color}}
        className='btn'
    >
        {text}
    </button>
  )
}

Button.defaultProp = {
    color : 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}