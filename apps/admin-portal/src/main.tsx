import axios from 'axios';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { store } from './app/store';


axios.interceptors.request.use((request:any) => {
  console.log(request);
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.Authorization = 'Bearer '+token
  }
  console.log(request)
  return request;
});

// axios.interceptors.response.use((response) => {
//   console.log(response);
//   return response;
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
  // </StrictMode>
);
