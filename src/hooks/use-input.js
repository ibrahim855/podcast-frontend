import { useState } from 'react';



const useInput = (validation) => {
    const [value, setValue] = useState("");

    let isValid = validation(value);


    const inputChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        isValid,
        inputChange
    }
}

export default useInput;