import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    position: 'top center',
    timeout: 3000,
    offset: '200px',
    transition: 'scale'
  }
  

ReactDOM.render(
<AlertProvider template={AlertTemplate} {...options}>
    <App />
</AlertProvider>

, document.getElementById('root'));
registerServiceWorker();
