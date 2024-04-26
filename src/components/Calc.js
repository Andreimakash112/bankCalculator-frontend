import React from 'react';

function AddProduct() {
 
///////////////////ипотека
  function handleSubmit() {
    const condition = ("вкл");
    const ratio = Number(9.6);
    const nameCalc = ("ИПОТЕЧНЫЙ");
    const nameInfo = ("Предлагаем воспользоваться услугами нашего банка для расчета и  получения ипотечного кредита!")
    
    
    if (!nameCalc || !ratio || !nameInfo) {
      document.getElementById('addProductError').innerText = 'Заполните поля';
      return;}
  

    const data = {
      condition: (condition),
      ratio: (ratio),
      nameCalc:( nameCalc),
      nameInfo :(nameInfo )
    };

    const api = 'http://127.0.0.1:9001/products/add';

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((result) => result.json())
      .then((result) => console.log(result));window.location.reload();
  }
  //////////////////////////////////////////////////авто
  
  function handleSubmitAuto() {
    const condition = ("вкл");
    const ratio = Number(3.5);
    const nameCalc = ("АВТОКРЕДИТ");
    const nameInfo = ("Предлагаем воспользоваться услугами нашего банка для расчета  Авто кредита!")
    
    if (!nameCalc || !ratio || !nameInfo) {
      document.getElementById('addProductError').innerText = 'Заполните поля';
      return;}
    
  

    const data = {
      condition: (condition),
      ratio: (ratio),
      nameCalc:( nameCalc),
      nameInfo :(nameInfo )
    };

    const api = 'http://127.0.0.1:9001/products/add';

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((result) => result.json())
      .then((result) => console.log(result));window.location.reload();
  }
/////////////////////////////////////////////////////потреб
function Сonsumerloan() {
  const condition = ("вкл");
  const ratio =  Number(14.5);
  const nameCalc = ("ПОТРЕБИТЕЛЬСКИЙ");
  const nameInfo = ("Предлагаем воспользоваться услугами нашего банка для расчета  Потребительского кредита!")
  
  
  if (!nameCalc || !ratio || !nameInfo) {
    document.getElementById('addProductError').innerText = 'Заполните поля';
    return;}


  const data = {
    condition: (condition),
    ratio: (ratio),
    nameCalc:( nameCalc),
    nameInfo :(nameInfo )
  };

  const api = 'http://127.0.0.1:9001/products/add';

  fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((result) => result.json())
    .then((result) => console.log(result));window.location.reload();
}
///////////////////////////////////////////////////новый калк
function NewSubmit() {
  
  const ratio = document.getElementById('ratio').value;
  const nameCalc = document.getElementById('nameCalc').value;
  const nameInfo = document.getElementById('nameInfo').value;
  const condition = ("включен");
  
  // Проверка на заполнение полей
  if (!nameCalc || !ratio || !nameInfo) {
    document.getElementById('addProductError').innerText = 'Заполните поля';
    return;
  }

  const data = {
      condition: condition,//значение 1 или2
      ratio: (ratio),
      nameCalc:( nameCalc),
    nameInfo :(nameInfo )
  }

  const api = 'http://127.0.0.1:9001/products/add'

  fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((result) => result.json())
    .then((result) =>  console.log(result)) 
    window.location.reload();


}
///////////////////////////////////////////////////
function removeToken() {
  const token = localStorage.getItem('token');
  if (token === null) {
    alert('Вы покидаете кабинет');
  } else {
    
    localStorage.removeItem('token');
    window.location.reload();  


  }
} 

//////////////////////////////////////////////////
  return (
    <div className="AddProduct">
 <button  onClick={removeToken}>ВЫЙТИ</button>
 <br/>
      <p>СТАРТ</p>
      <p>Единожды при старте</p>
      <p>ДЛя сохранения в базу</p>
        <div>

        <button id='send' onClick={handleSubmitAuto}>Запустить "Автокредит калькулятор"</button><br/>
          <button id='send' onClick={handleSubmit}>Запустить "Ипотечный калькулятор"</button><br/>
          <button id='send' onClick={Сonsumerloan}>Запустить "Потребительский калькулятор"</button><br/>
         
          <hr/>
              <h2>СОЗДАНИЕ НОВОГО КАЛЬКУЛЯТОРА</h2>
         <br/>
      
      <input id='ratio' placeholder='годовая ставка' type='text' />
      <input id='nameInfo' placeholder='Инфо о калькуляторе' type='text' />
      <input id='nameCalc' placeholder='название калькулятора' type='text' />
      <button id='send' onClick={NewSubmit}>Добавить</button>
  <hr/>  
      
        </div>
      
      
      <p id='addProductError'></p>
    </div>
  );
}

export default AddProduct;
