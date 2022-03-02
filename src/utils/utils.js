import { constant } from '../constant/constant';

export const utils = {
    caseConverter: {
        sentenceToCamelCase: inputString => {
            let convertedString = constant.EMPTY_STRING;
            const splitedStringArray = inputString.trim().split(constant.EMPTY_STRING);
            splitedStringArray.forEach((string, index) => {
                if( index === constant.ZERO) {
                    convertedString+=string.toLowerCase();
                }
                else convertedString+=string[0].toUpperCase()+string.slice(1).toLowerCase();
            });
            return convertedString;
        }
    },
    createStateData: function(fieldsInfo) {
        const formData = {};
        fieldsInfo.forEach((field) => {
            formData[this.caseConverter.sentenceToCamelCase(field.label)] = '';
        })
        return formData;
    }
}
