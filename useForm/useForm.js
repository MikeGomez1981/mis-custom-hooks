import { useState } from 'react';

        //initialState se define como un objeto vacio para que si no se manda nada no falle
export const useForm = (initialState = {}) => {
   //initialState seria un objeto igual al useState de FormWithCustomHook
    const [values, setvalues] = useState(initialState)

    const reset =()=>{
        setvalues(initialState);//con esto conseguimos que en un input despues de 
                                //agregar algo se vuelva al estado inicial. SE RESETEA ASI
    }

    const handleInputChange= ({target})=>{   //hacemos desestructuracion del e (evento)
        
        setvalues({
            ...values, 
            [target.name ]: target.value
        });
    }
    return [ values, handleInputChange, reset ];


}
