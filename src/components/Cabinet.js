import React, { useEffect, useState } from 'react';
import './Cabinet.css';
function Report() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const api = 'http://127.0.0.1:9001/reports';

    fetch(api, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setReports(data.data))
      .catch((error) => console.error('Error:', error));
  }, []);

  

  return (
    <div className="Report">
        <h3>ОТЧЕТЫ</h3>
        <br/>
      <table>
        <thead>
          <tr>
            
            <th>Сумма кредита</th>
            <th>Общая ставка</th>
            <th>Ежемесячный платеж</th>
            <th> Доход</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report._id}>
              
              <td>{report.s}</td>
              <td>{report.r}</td>
              <td>{report.y}</td>
              <td>{report.i}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      <hr/> 
    </div>
  );
}

export default Report;