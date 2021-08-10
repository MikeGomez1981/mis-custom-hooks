
import {useState} from 'react';

export const useCounter = ( initialState=10 ) => {//initialState se coge de abajo y si no
                                                //se le psas argumento el valor será 10
    
    const [counter, setState] = useState(initialState);

    const increment = () =>{
        setState( counter + 1 );
    }
    const decrement = () =>{
        setState( counter - 1 );
        
    }
    const reset =()=>{
        setState(initialState);
    } ;
    return{
        counter,//valor inicial(initialState) 10
        increment,
        decrement,
        reset
    };

}