import { useNavigate } from "react-router-dom"

function HpButton(){
  const navegar = useNavigate()
  return(
    <>
      <button onClick={(e)=>{
        navegar("/Harry Potter")
      }} className="buttonsComprar">Comprar</button>
    </>
  )
}

export default HpButton