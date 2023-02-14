import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App3 from './App3';
// import App from './App';
// { Board, Game, Square }
import reportWebVitals from './reportWebVitals';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <Board></Board>
      <Square></Square> */}
      {/* <Game></Game> */}
       <App2></App2>   {/*ana js dosyasında yazdığımız kodları burada bu şekilde çağırabilmekteyiz.  */}

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






