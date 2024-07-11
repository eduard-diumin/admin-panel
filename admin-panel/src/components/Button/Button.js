import React from 'react';
import './Button.css'

function Button({children, btnGreen}) {
    const className = btnGreen ? 'btn btn-green' : 'btn'
  return (
    <button className={className}>
        {children}
    </button>
  )
}
export default Button;
