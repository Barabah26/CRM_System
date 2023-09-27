import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './FormStyle.css';

// Замість статичних даних, ви можете підключити більш складний механізм аутентифікації
const user = {
  login: 'myLogin',
  password: 'myPassword',
};

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredLogin = e.target.login.value;
    const enteredPassword = e.target.password.value;

    if (enteredLogin === user.login && enteredPassword === user.password) {
      // Перекидаємо користувача на сторінку DataTable
      window.location.href = '/DataTable';
    } else {
      alert('Неправильний логін або пароль');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container form'>
      <h3>Авторизація користувача</h3>
      <TextField
        name="login" // Додайте ім'я поля для логіну
        label="Ім'я користувача"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        name="password" // Додайте ім'я поля для паролю
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
  );
}

export default Login;
