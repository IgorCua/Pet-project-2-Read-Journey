import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Header } from './apps/header/Header';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}/>
    </Routes>
  );
}

export default App;
