
import React from "react"
import { Navigate, useNavigate } from "react-router-dom"



function Botao(){

    const navigate = useNavigate();
        return(
            <>
                <button className="buttonsSobre" onClick={()=>{navigate('/contact')}}>Sobre</button>
            </>
            
        )
    }
export default Botao