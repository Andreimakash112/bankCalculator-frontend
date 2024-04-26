import React from 'react';


function Registration() {
  function Reg() {
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const  email = document.getElementById('email').value
    const status =('1');
    const data = {
        login:login,
        password:password,
        email:email,
        status:status
    }
    console.log(status) 
    console.log(data) 

    const api = 'http://127.0.0.1:9001/registration'

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(result => result.json())
    .then((result) => {
      console.log(result)
    })
 }

  return ( 
    <>
      <h1>Регистрация</h1>
       <input id='login' type='text' placeholder='Придумайте логин' />
       <input id='password' type='password' placeholder='Придумайте пароль' />
       <input  id='email' type='email' placeholder='Почта' />
       <button onClick={Reg}>Сохранить</button>
    </>
  );
}

export default Registration;