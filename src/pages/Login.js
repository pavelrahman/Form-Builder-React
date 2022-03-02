import React, {useState} from "react";
import { utils } from "../utils/utils";
import { constant } from "../constant/constant";
import CustomForm from "../components/custom/CustomForm";
import '../assets/css/pages/login.css';

const login = (props) => {
    const [formState, setFormState] = useState(utils.createStateData(constant.formData.login.data));

    const onChangeHandler = (event, fieldType, fieldName) => {
        setFormState((prevState) => {
            return {
                ...prevState,
                [fieldName]: event.target.value
            }
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return <CustomForm formData = {constant.formData.login.data}
        className={props.className}
        formState = {formState}
        title={constant.formData.login.title}
        onChange = {onChangeHandler}
        onSubmit = {onSubmit}
    />
}

export default login;