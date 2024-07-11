import React from 'react';
import logo from '../../../../assets/logo-green.svg';
import './Card.css';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

function Card() {
  return (
    <div className='login__card'>
        <img className='logo' src={logo} alt="logo" width="240px" />
        <Input placeholder={'User Name'}/>
        <Input placeholder={'Password'} showIcon={true}/>
        <Button btnGreen={true}>Login</Button>
    </div>
  )
}

export default Card;