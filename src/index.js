import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Fix import
import './index.css';
import MainPage from './MainPage';
import reportWebVitals from './reportWebVitals';
import LoginForm from './LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/mainPage" element={<MainPage></MainPage>} />
      <Route path="/" element={<LoginForm></LoginForm>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
