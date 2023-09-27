import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Routes } from 'react-router-dom'; // Додайте Routes та Route
import Login from './components/Login';
import DataTable from './components/DataTable';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DataTable from './components/DataTable';
import './components/FormStyle.css'

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dataTable" element={<DataTable />} />
      </Routes>
      
    </Router>
    
  );
}

export default App;