import Formex from "./formex";

const Input=()=>{
    const [state,handler]=Formex();

    const click=(e)=>{
        e.preventDefault();
        console.log(state);
    }
    return(
        <form onSubmit={click}>
            <label htmlFor="username">Name</label>
            <input type="text" name="name" id="username" onChange={handler}></input>
            <label htmlFor="userage">Age</label>
            <input type="text" name="age" id="userage" onChange={handler}></input>
            <button >submit</button>
        </form>
    )
}

export default Input;