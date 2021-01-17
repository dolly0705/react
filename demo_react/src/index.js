import React from 'react'; //下面有用到jsx語法，需先編譯
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Mou from './Mou';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
  //ReactDOM是第三方的模塊，他有一個方法render，這個方法可以幫我們把一個組件App，掛載到某個道路節點上
  <React.StrictMode>
    {/* <App /> */}
    <Mou />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
