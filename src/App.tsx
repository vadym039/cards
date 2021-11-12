import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import ErrorHandler from './components/UI/Error';
import HaderComponent from './components/UI/Hader';
import { AppStyled } from './styled';
import AppRoutes from './components/Routes/index';

function App() {
  return (
    <AppStyled className="App">
      <BrowserRouter>
        <HaderComponent />
        <ErrorHandler />
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </AppStyled>
  );
}

export default App;
