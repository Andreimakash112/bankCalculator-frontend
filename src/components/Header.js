import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({ setPage, setModalBox, token, setToken, login }) {

 

  function changePageUno() {
    setPage('Main');
  }

  function changePageTre() {
    setPage('Admin');
  }

  function BankingReq() {
    const token = localStorage.getItem('token');

    
      if (token !== null ) {
        console.log('ТОКЕН ЕСТЬ!!!');
        console.log({login});
        return (
          <>
           <li onClick={changePageTre}> Admin</li>
            
          </>
        );


    } else {
      console.log('НЕТ ТОКЕНА !!!');
      return null;
    }
  }

  return (
    <div className="Header">
      
      <ul>
        <BankingReq />
        <li onClick={changePageUno}> Главная</li>
      </ul>
      <UserBox setModalBox={setModalBox}/>
    </div>
  );
}

export default Header; 