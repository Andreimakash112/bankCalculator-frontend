import React from 'react';
import './Admin.css';
import { jwtDecode } from 'jwt-decode';
import Calc from '../components/Calc';
import CalcFunctions from '../components/CalcFunctions';
import Cabinet from '../components/Cabinet';
function Admin({ token }) {
  
    function NewPassword() {
        const pass = document.getElementById('pass').value
console.log(token)
        if (pass.length === 0) {
            document.getElementById('passMessage').innerText = "Пароль не может быть пустым!"
            return
        }

        const data = {
            token: token,
            password: pass
        }

        const api = 'http://127.0.0.1:9001/user/NewPassword'

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((result) => result.json())
        .then((result) => {
            console.log(result)
            document.getElementById('passMessage').innerText = result.message
        })
    }

    function removeToken() {
        const token = localStorage.getItem('token');
        if (token === null) {
            alert('Вы покидаете кабинет');
        } else {
            localStorage.removeItem('token');
            window.location.reload();  
        }
    } 

    if (token!==0) {
        return (
            <div className="Admin">
               
                <> <Calc/></>
                <><CalcFunctions/></>
                <><Cabinet/></>
                  <h1>Cмена пароля</h1>
                  
                <p id='Cablogin'>Ваш login: {jwtDecode(token).login}</p>
                <p id='Cabemail'>Ваш E-Mail: {jwtDecode(token).email}</p>
                <p id='CabPassword'>Ваш password: {jwtDecode(token).password}</p>
                <p>После смены пароля, выйдите и авторизуйтесь с новым паролем</p>
                <input id='pass' placeholder='Пароль' type='password' />
                <button id='sendPass' onClick={NewPassword}>Сменить пароль</button>
                <hr/> 
                <hr/> 
                <button onClick={removeToken}>ВЫЙТИ</button>
                
             <hr/> 
               
                <p id='passMessage'></p>
            </div>
        );
    }
}

export default Admin;

