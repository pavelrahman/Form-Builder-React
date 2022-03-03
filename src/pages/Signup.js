import React, {useState} from "react";
import { utils } from "../utils/utils";
import { constant } from "../constant/constant";
import CustomForm from "../components/custom/CustomForm";
import '../assets/css/pages/sign-up.css';

const signUp = (props) => {
    const [formState, setFormState] = useState(utils.createStateData(constant.formData.signUp.data));

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

    return <CustomForm formData = {constant.formData.signUp.data}
        className={`${props.className} ${constant.formData.signUp.style.background}`}
        formState = {formState}
        title={constant.formData.signUp.title}
        onChange = {onChangeHandler}
        onSubmit = {onSubmit}
    />
}

export default signUp;