import React from 'react';
import { IoMdEye } from 'react-icons/io';
import './Input.css';

function Input({showIcon, placeholder}) {
  return (
    <label className='label-input'>
        <input type="text" placeholder={placeholder} />
        {showIcon && <IoMdEye size="34px" color='green'/> }
    </label>
  )
}

export default Input;
