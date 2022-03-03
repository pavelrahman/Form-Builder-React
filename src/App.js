import React, {useState, useEffect} from 'react';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import './app.css';

const App = (props) => {
    
    
    return <div className='app'>
            <SignUp className={'sign-up'}/>
            <Login className={'LogIn'}/>
           </div>
}

export default App;