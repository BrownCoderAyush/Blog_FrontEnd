import './App.css';
import { Routes , Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleList from './pages/ArticleList';
import NotFoundPage from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import { createContext, useEffect, useState } from 'react';
import getJWTToken from './hooks/cookie';

export const context = createContext();

function App() {
  const [user , setUser]=useState(null); 
  useEffect(function(){
    const res = getJWTToken();
    setUser(res);
  },[])

  return (
    <context.Provider value={{user,setUser}}>
    <div className="App">
     <Navbar/>
     <div id="page-body">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/createaccount' element = {<CreateAccountPage/>}/> 
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/articles' element={<ArticleList/>}/>
        <Route path='/articles/:articleId' element={<ArticlePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      </div>  
    </div>
    </context.Provider>
      
  );
}

export default App;
