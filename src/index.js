import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './pages/clockPage/Clock';
import Count from './pages/countPage/Count';
import TopNav from './components/TopNav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TopNav />
    <Clock />
    <Count />
  </React.StrictMode>,
  document.getElementById('root')
);
