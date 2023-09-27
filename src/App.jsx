import { Children, useState } from "react"
import Botao from "./components/ButtonComponent"
import ButtonComprar from "./components/ButtonCoprar"
import Footter from "./components/fotter"


function App(){
  var [openModal,setOpenModal] = useState(false)
  var [text,setText] = useState()
  return(
   <>

       <header>
      <div id="logo-space">
         <span>L-ivros</span>
         <img id="logo"src="../images/book_icon.PNG" alt="" />
       </div>

        <div className="nav">
          
          <input
           type="text"
           placeholder="Pesquisa..." 
           value={text}
           onChange={(e)=>{
            setText = (e.target.value)
            console.log({setText})
           }}/>
        </div>

       </header>

       <p>Sugestoes</p>



       <div className="Grid_Books">


          <div
           id=""
           className="books"><img src="./images/Cosmos.JPG" alt="" /><br />
          
          
          <post>Cosmos Carl Sagan</post> <br />
          <ButtonComprar/>
          <Botao/>

       
       
          </div>
          <div
           id=""
           className="books">
            <img src="./images/1984 George Orwell.JPG" alt=""/><br />
       
          <post>1984 George Orwell</post> <br />
          <ButtonComprar/>
          <Botao/>
       
          </div>
          <div
           className="books"
           id="Harry Potter">
       
            <img
             src="/images/Harry Potter e a Camara Secreta.JPG"
              alt="" /><br />
            <post>Harry Potter e a Camara Secreta</post> <br />
            <input className="buttonsComprar" type="button" value="Comprar" />
            <Botao/>
          </div>

            <div
             id="1984 George Orwell"
             className="books"><img src="./images/1984 George Orwell.JPG" alt=""/><br />
       
            <post>1984 George Orwell</post> <br />
            <ButtonComprar/>
            <Botao/>
          
            </div>

            <div
             id="1984 George Orwell"
             className="books"><img src="./images/1984 George Orwell.JPG" alt=""/><br />
            
            <post>1984 George Orwell</post> <br />
            <ButtonComprar/>
            <Botao/>
          
            </div>

            <div
             id=""
             className="books"><img src="./images/1984 George Orwell.JPG" alt=""/><br />
            
            <post>1984 George Orwell</post> <br />
            <ButtonComprar/>
            <Botao/>
          
            </div>
            <Footter/>
            
       
       </div>
   </>
   
   


  )
  
}

export default App