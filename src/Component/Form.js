
import InputHook from "../Hooks/inputhook";
const Form=(props)=>{
  
    const {
        value:enteredValue,
        isValid:valueIsValid,
        inputTouched:nameInputTouched,
        change:namechange,
        valueInputBlurHadnler:nameInputBlurHandler,
        reset:namereset,
    }=InputHook(value=>value!=='')


    const {
        value:enteredEmailValue,
        isValid:valueEmailIsValid,
        inputTouched:emailInputTouched,
        change:emailchange,
        valueInputBlurHadnler:emailInputBlurHandler,
        reset:emailreset,
    }=InputHook(value=>value.includes('@'))



 

    let formValid=false;
    if(valueIsValid && valueEmailIsValid){
        formValid=true;
    }

    // const inputRef=useRef(null);


    function submitHandler(event){
        event.preventDefault();
      
        if(!valueIsValid){
            return;
        }
        // console.log(enteredName);
        // console.log(inputRef.current.value)
        namereset();
        emailreset();
    }
    
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" value={enteredValue} id="name" onChange={namechange}  onBlur={nameInputBlurHandler}></input>
            <label htmlFor="email">Email</label>
            <input type="text" value={enteredEmailValue} id="email" onChange={emailchange} onBlur={emailInputBlurHandler}></input>
            {nameInputTouched&& <p>Name not an empty.</p>}
            {emailInputTouched&& <p>Email not an empty.</p>}
            <button disabled={!formValid}>Submit</button>
        </form>
    )
}

export default Form;