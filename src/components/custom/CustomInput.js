import React from 'react';
import '../../assets/css/custom-component/customInput.css';
import { utils } from '../../utils/utils';

const customInput = (props) => {
    const {className, label, type, id, name, minLength, maxLength, size, value, onChange} = props;        
    
    return <div className={`custom-input ${className ? className : ''}`}>
                {label && <label htmlFor="name">{label}</label>}
                <input type={type} 
                id={id} 
                name={name} 
                minLength={minLength} 
                maxLength={maxLength} 
                size={size}
                value={value}
                onChange={(event)=>onChange(event, type, utils.caseConverter.sentenceToCamelCase(label))}/>
           </div>
}

export default customInput;