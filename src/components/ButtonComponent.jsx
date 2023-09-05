import { StyleHTMLAttributes } from "react"

function Botao(){

    function eventoBotao(){
        return(
            alert('Tudo Certinho')
        )
    }


    return(
        <button className="buttonsSobre" onClick={eventoBotao}>Sobre</button>
      
    )
}
export default Botao