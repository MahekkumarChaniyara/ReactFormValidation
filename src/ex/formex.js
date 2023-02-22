import { useState } from "react";

const Formex=()=>{
    const [state,setState]=useState({});
    const changehandler=(e)=>{
       // e.persist();
        console.log(e.target.name);
        setState(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    return [state,changehandler]
}

export default Formex;