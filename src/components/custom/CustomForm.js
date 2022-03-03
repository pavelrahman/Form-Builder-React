import React from 'react';
import CustomInput from './CustomInput';
import '../../assets/css/custom-component/customForm.css';
import { utils } from '../../utils/utils';

const customForm = (props) => {
    const {onChange, onSubmit, formData, className, title, formState} = props;
    // console.log(props);
    return <div className={`custom-form ${className ? className : ''}`}>
        <h1 className={'form-title'}>{title}</h1>
        <form onSubmit={onSubmit} >
        {formData && formData.map((field, index) => {
            return <CustomInput
            className={field.className} 
            key={index}
            label={field.label} 
            type={field.type}
            onChange={onChange}
            value={formState[utils.caseConverter.sentenceToCamelCase(field.label)]}
        />
        })}
        <CustomInput type={'submit'} value={'Save'} className={'form-button'}/>
    </form>
    </div>
}

export default customForm;