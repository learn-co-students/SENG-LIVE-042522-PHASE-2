import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// React 18 syntax:
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// React.Strictmode ensures we are following correct react standards
// the first argument of render, is our react element we want to render on the DOM: <App />
// the second argument is the part of our DOM we want to render the react element in 
// this here only happens once!
ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
