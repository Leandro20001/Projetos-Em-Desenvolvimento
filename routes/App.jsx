import { Children, useState } from "react"
import Botao from "../src/components/ButtonComponent"
import ButtonComprar from "../src/components/HpButton"
import Footter from "../src/components/fotter"
import Modal from "../src/components/PurchaseModal"
import HpButton from "../src/components/HpButton"


function App(){
  const [openModal,setOpenModal] = useState(false)

  return(
  
   <> 

       <header>
      <div id="logo-space">
         <span>L-ivros</span>
         <img id="logo"src="../images/book_icon.PNG" alt="" />
       </div>


       </header>

       <p>Sugestoes</p>

       <Modal isOpen = {openModal} isClose={()=> setOpenModal(!openModal)}>
       </Modal>



       <div className="Grid_Books">
          <div
           id="Cosmos"
           className="books"><img src="./images/Cosmos.JPG" alt="" /><br />
          
          
          <post>Cosmos Carl Sagan</post> <br />
          <button onClick={(e)=>{
            setOpenModal(true)
          }}>MODAL</button>
          <ButtonComprar/>
          <Botao/>

       
       
          </div>
          <div
           id="1984"
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
            <HpButton/>
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
             id="1984"
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