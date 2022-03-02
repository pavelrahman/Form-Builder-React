import React, {useState, useEffect} from 'react';
import CustomInput from './components/custom/CustomInput';
import CustomForm from './components/custom/CustomForm';
import { utils } from './utils/utils';
import { constant } from './constant/constant';
import Login from './pages/Login';

const App = (props) => {
    
    
    return <div className='app'>
            <Login className={'login'}/>
           </div>
}

export default App;