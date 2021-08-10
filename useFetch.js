
import {useState, useEffect, useRef  } from 'react';

export const useFetch = (url) => {
    
   
    const isMounted = useRef(true);//cuando hacemos esta llamada el componente esta
                                //cargado por primera vez, por eso se inicializa en true
    
    const [state, setState] = useState({data: null, loading: true, error: null});
    //depues de recibir el url se dispara un efecto
    
    useEffect(() => { //en este useEffect solo empleamos el cleanup 
        return() => {
        //esto se ejecuta cuando el componete se desmonta, de esta manera cambiamos su estado   
            isMounted.current = false;
        }
    }, [])

    useEffect( ()=>{
        setState({ data: null, loading: true, error: null });
        const fetch = require('node-fetch') 
        fetch(url)
            .then( resp=> resp.json())
            .then( data=>{

                if ( isMounted.current ){    
                  setState({
                    loading: false,
                    error: null,
                    data
                    });
                }
            })//implementamos catch, para tener control sobre el error si no se carga la info del fetch
            .catch(()=>{
                setState({
                    data: null,
                    loading: false,
                    error:'No se pudo cargar la info'
                })
            })

          },[url])//este efecto solo se dispara cuando se trata del url      

    return state;
}
