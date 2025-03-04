import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    let position = section.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (position < windowHeight * 0.8) {
      section.classList.add('show');
    }
  });
});
