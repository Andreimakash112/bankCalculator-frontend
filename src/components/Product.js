import React, { useState } from 'react';
import './Product.css';

function Product({ ratio, condition, nameCalc ,nameInfo }) {
  let monthlyRate = ratio / 12 / 100;
  console.log(monthlyRate);
  let Result = []; // Создаем переменную для хранения результатов

  const [showInputPanel, setShowInputPanel] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const uho = () => {
    const n = parseInt(document.getElementById('name').value, 10);
    const p = parseInt(document.getElementById('num').value, 10);
    const d = parseInt(document.getElementById('nu').value, 10);

    if (isNaN(n) || isNaN(p) || isNaN(d)) {
     
      setErrorMessage('Заполните все поля. Используйте только один калькулятор');
     

      return;}

    const sum = n - d;
    console.log(sum);
    let rooy = Math.pow(1 + monthlyRate, p * 12);
    console.log(rooy);
    if (rooy === Infinity) {
      setErrorMessage('Oтказано-Oбновите страницу! Измените срок кредитования ');
      
      return;
    }
    const payment = (sum * monthlyRate * rooy) / (rooy - 1);
    console.log(payment);
    const income = payment * 2.5;
    console.log(income );
    // Заполняем переменную Result результатами расчетов

    document.getElementById('sum').value = sum.toFixed(0);
    document.getElementById('rooy').value = rooy.toFixed(2);
    document.getElementById('payment').value = payment.toFixed(0);
    document.getElementById('income').value = income.toFixed(0);
    Result = [
      { label: 'Сумма кредита', value: sum },
      { label: 'Общая ставка', value: rooy },
      { label: 'Ежемесячный платеж', value: payment },
      { label: 'Необходимый доход', value: income }
    ];
    console.log(Result);

    let s = sum.toFixed(0);
    let r = rooy.toFixed(2);
    let y = payment.toFixed(0);
    let i = income.toFixed(0);
    console.log(s, r, y, i);

    const data = {
      s: s,
      r: r,
      i: i,
      y: y,
     
    };
    console.log(data);

    const api = 'http://127.0.0.1:9001/reports/add';

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((result) => result.json())
      .then((result) => console.log(result));

    //window.location.reload();
  }; 
////////////////////////////////////////////////////////////
const sendDataByEmail = () => {
  const costOfHouse = document.getElementById('name').value;
  const loanDurationInYears = document.getElementById('num').value;
  const downPayment = document.getElementById('nu').value;
  const rooy = document.getElementById('rooy').value;
  const sum = document.getElementById('sum').value;
  const payment = document.getElementById('payment').value;
  const income = document.getElementById('income').value;

  const userInputs = { costOfHouse, loanDurationInYears, downPayment, sum, payment, rooy, income };

  const senderEmail = 'andrei.makash@yandex.ru';//1 Получение адреса электронной почты отправителя
  const recipientEmail = '';// 2. Получение адреса электронной почты получателя
  const emailBody = `Стоимость жилья: ${userInputs.costOfHouse}\nНа какой срок: ${userInputs.loanDurationInYears}\nПредоплата: ${userInputs.downPayment}\nСумма кредита: ${userInputs.sum}\nОбщая ставка: ${rooy}\nЕжемесячный платеж: ${payment}\nНеобходимый доход: ${income}\nОтправлено с почты:${senderEmail}`;

  window.location.href = `mailto:${recipientEmail}?subject=Credit%20Calculator%20Results&body=${encodeURIComponent(emailBody)}`;
};
//////////////////////////////////////////////////////////
  const handleCloseInputPanel = () => {
    setShowInputPanel(false);
  };

  const handleOpenInputPanel = () => {
    setShowInputPanel(true);
  };

  if (condition === "вкл") {
    return (
      <div className="Product">
        {showInputPanel ? (
          
          <><h3>{nameCalc}</h3>
          
            <h4>ВНИМАНИЕ ДОЛЖЕН БЫТЬ ОТКРЫТ </h4>
            <h5>ТОЛЬКО 1 КАЛЬКУЛЯТОР</h5>
            <p>Введите стоимость Покупки</p>
            <input type="number" id="name" name="name" required /><br />

            <p>Введите срок кредитования в годах</p>
            <input type="number" id="num" name="num" required /><br />

            <p>Предоплата</p>
            <input type="number" id="nu" name="nu" /><br />
            
            <button onClick={uho}>Рассчитать</button><br />
           
            <button onClick={handleCloseInputPanel}>Закрыть панель</button><br />
            <br/>
            {errorMessage && <h2>{errorMessage}</h2>}
            <h6>ИТОГ РАСЧЕТОВ</h6>
            <br/>
            <p>Сумма кредита</p>
            <input type="number" id="sum" name="sum" required /><br />
            
         
            <p>Общая ставка</p>
            <input type="number" id="rooy" name="rooy" required /><br />

            <p>Ежемесячный платеж</p>
            <input type="number" id="payment" name="payment" required /><br />

            <p>Необходимый доход</p>
            <input type="number" id="income" name="income" /><br />
            <br/>
             <button onClick={sendDataByEmail}>Отправить на почту</button> <br />
          </>
        ) : (
          <>
            <h3>{nameCalc }</h3>
            <p>{nameInfo}</p>
            <button onClick={handleOpenInputPanel}>Открыть панель ввода</button>
          </>
        )}
      
      </div>
    );
  } 
  
  
  
  
  
  else {
    return (
      <div className="Product">
        <p>{nameCalc}</p>
        <br/>

        <p>{nameInfo}</p>
        
        <p>ТЕХНИЧЕСКИЕ РАБОТЫ</p>
      </div>
    );
  }
}

export default Product;



