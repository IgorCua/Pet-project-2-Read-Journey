import './assets/fonts/poppins/poppinsFont.css';
import './assets/fonts/gilroy/gilroyFont.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Header } from './apps/header/Header';
import { PrivateRoute, PublicRoute } from './services/routes';
import { RegisterPage } from './apps/registerPage/RegisterPage';
import { LoginPage } from './apps/loginPage/LoginPage';
import { RecommendedPage } from './apps/recommendedPage/RecommendedPage';
import { selectAuthIsLoggedIn } from './redux/auth/selectors';
import { useSelector } from 'react-redux';
import { LibraryPage } from './apps/libraryPage/LibraryPage';

function App() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <Routes>
      <Route path='/register' element={<PublicRoute component={<RegisterPage/>}/>}/>
      <Route path='/login' element={<PublicRoute component={<LoginPage/>}/>}/>
      {isLoggedIn && 
        <Route element={<PrivateRoute component={<Header/>}/>}>
          <Route path='/recommended' element={<PrivateRoute component={<RecommendedPage/>}/>}/>
          <Route path='/library' element={<PrivateRoute component={<LibraryPage/>}/>}/>
          <Route path='/reading' element={<PrivateRoute component={<RecommendedPage/>}/>}/>
        </Route>
      }
      <Route path='*' element={<Navigate 
          to={isLoggedIn ? '/recommended' : '/register'} 
          replace={true}/>
      }/>
    </Routes>
  );
}

export default App;
