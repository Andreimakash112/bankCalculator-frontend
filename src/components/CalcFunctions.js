import React, { useEffect, useState } from 'react';
import './Cabinet.css';

function CalcFunctions() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState({});
  const [newCondition, setNewCondition] = useState('');
  const [newRatio, setNewRatio] = useState('');
  const [newNameCalc, setNewNameCalc] = useState('');

  useEffect(() => {
    const api = 'http://127.0.0.1:9001/products';

    fetch(api, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleEdit = (id) => {
    const product = products.find((product) => product._id === id);
    setEditProduct(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'condition') setNewCondition(value);
    if (name === 'ratio') setNewRatio(value);
    if (name === 'nameCalc') setNewNameCalc(value);
  };

  const handleUpdate = () => {
    const updatedProduct = { ...editProduct, condition: newCondition, ratio: newRatio, nameCalc: newNameCalc };
    fetch(`http://127.0.0.1:9001/products/${editProduct._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(
          products.map((product) =>
            product._id === editProduct._id ? { ...product, ...data } : product
          ) 
        );
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:9001/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(products.filter((product) => product._id !== id));
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="CalcFunctions">
      <h4>КАЛЬКУЛЯТОРЫ</h4>
      <br/>
      <table>
        <thead>
          <tr>
            <th>Состояние</th>          
            <th>Общая ставка</th>
            <th>Название</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.condition}</td>
              <td>{product.ratio}</td>
              <td>{product.nameCalc}</td>
              <td>
                <button onClick={() => handleEdit(product._id)}>Изменить</button>
                <button onClick={() => handleDelete(product._id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editProduct._id && (
        <div>
          <input
            type="text"
            name="condition"
            value={newCondition}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="ratio"
            value={newRatio}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="nameCalc"
            value={newNameCalc}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdate}>Внести изменения</button>
        </div>
      )}
      <hr/> 
    </div>
  );
}

export default CalcFunctions;
