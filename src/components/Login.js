import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправка даних на сервер для входу користувача
    console.log('Відправлені дані:', formData);
  };

  return (
   <>
   <div className='container'>
   <NavBar/>

   
   <div className="container d-flex justify-content-center">
      
      <div className="FormStyle.container">
        <h2>Вхід</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div/>
            <input
              type="email"
              className="FormStyle.form-control-sm"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <div/>
            <input
              type="password"
              className="FormStyle.form-control-sm"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            /> 
            <div/>
          </div>
          <div className='mt-2'>
            <button type="submit" className="btn btn-primary">
              Увійти
            </button>
          </div>
        </form>
      </div>
    </div>
   </div>
   
   
   </>
    
  );
}

export default Login;