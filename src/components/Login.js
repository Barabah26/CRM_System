import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './FormStyle.css'


// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Отправка даних на сервер для входу користувача
//     console.log('Відправлені дані:', formData);
//   };

  function Login() {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Додайте код для обробки даних форми
    };
  
    return (
      <div className='body'>
        <form onSubmit={handleSubmit} className='form-container form'>
          <h3>Авторизація користувача</h3>
          <TextField
            label="Ім'я користувача"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Пароль"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Увійти
          </Button>
        </form>
      </div>
  );
}
   

export default Login;