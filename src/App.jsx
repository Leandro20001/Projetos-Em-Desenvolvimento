import { Children, useState } from "react"
import Botao from "./components/ButtonComponent"
import ButtonComprar from "./components/ButtonCoprar"
import Footter from "./components/fotter"
import Modal from "./components/modal"


function App(){
  var [openModal,setOpenModal] = useState(false)



  return(
   <div className="App">

       <header>
           <Modal open={openModal}>


            <button onClick={()=>{
              setOpenModal(false)
            }} id="modal-button">Fechar</button>


          <div id="purchase-menu">

            <input type="text" name="" id="" />
            <button id="modal-button-comprar">Comprar</button>
          </div>

          
        </Modal>
       

       <div id="logo-space">
         <span>L-ivros</span>
         <img id="logo"src="../images/book_icon.PNG" alt="" />
       </div>

        <div className="nav">
          <a href=".">Contato</a>
          <a href=".">Novidades</a>
          <a href=".">Carrinho</a>
          <a href=".">Cadastrar-se</a>
        </div>

       </header>

       <p>Sugestoes</p>



       <div className="Grid_Books">


          <div className="books"><img src="./images/Cosmos.JPG" alt="" /><br />
          
          
          <post>Cosmos Carl Sagan</post> <br />

          <input onClick={()=>{
            setOpenModal(true)
          }} className="buttonsComprar" type="button" value="Comprar" />
          <Botao/>

       
       
          </div>
          <div className="books"><img src="./images/1984 George Orwell.JPG" alt=""/><br />
       
          <post>1984 George Orwell</post> <br />
          <ButtonComprar/>
          <Botao/>
       
          </div>
          <div className="books">
       
            <img src="/images/Harry Potter e a Camara Secreta.JPG" alt="" /><br />
            <post>Harry Potter e a Camara Secreta</post> <br />
            <input className="buttonsComprar" type="button" value="Comprar" />
            <Botao/>
            </div>
       
       
       </div>
     <Footter/>
   </div>
   
   


  )
  
}

export default App