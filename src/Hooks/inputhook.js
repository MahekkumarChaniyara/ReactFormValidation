import { useState } from "react";
const InputHook=(validValue)=>{
    const [enteredValue,setEnteredValue]=useState('');
    const [valueTouched,setValueTouched]=useState(false);

    const valueIsValid=validValue(enteredValue)
    const inputTouched=!valueIsValid&&valueTouched;

    const change=(event)=>{
        setEnteredValue(event.target.value);
    }

    const valueInputBlurHadnler=()=>{
        setValueTouched(true);
    }

    const reset=()=>{
        setEnteredValue('');
        setValueTouched(false)
    }

    return {
        value:enteredValue,
        isValid:valueIsValid,
        inputTouched,
        change,
        valueInputBlurHadnler,
        reset,
    }
}

export default InputHook;