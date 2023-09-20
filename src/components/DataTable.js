import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';



function DataTable() {
    const [data, setData] = useState([
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        completed: false, // По замовчуванню не виконано
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        completed: false, // По замовчуванню не виконано
      },
      {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob@example.com',
        completed: false, // По замовчуванню не виконано
      },
    ]);
  
    const handleCheckboxChange = (id) => {
      // Коли користувач встановлює галочку, ми оновлюємо стан `completed` для відповідного рядка
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    };
  
    return (
        <div>
          <div>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Ім'я користувача 
                </Typography>
                <Avatar alt="" src="VIRT.png"/>
                <Button color="inherit">Вихід</Button>
              </Toolbar>
            </AppBar>
          </div>
                <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ім'я</th>
                <th>Email</th>
                <th>Виконано</th> {/* Новий стовпчик для чекбоксів */}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    {/* Чекбокс для встановлення галочки */}
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
                </div>
        </div>
    );
  }
  
  export default DataTable;