import Botao from "./components/ButtonComponent"
import Footter from "./components/fotter"

function App(){
  return(
   <div className="App">

     <div className="content">
       <h1>L-ivros</h1>
       <p>Sugestoes</p>

       <div className="Grid_Books">
          <div className="books"><img src="./images/Cosmos.JPG" alt="" /><br /><post>Cosmos Carl Sagan</post> <br />
          <input className="buttons" type="button" value="Comprar" />
          <Botao/>
       
       
          </div>
          <div className="books"><img src="./images/1984 George Orwell.JPG" alt=""/><br />
       
          <post>1984 George Orwell</post> <br />
          <input className="buttons" type="button" value="Comprar" />
          <Botao/>
       
          </div>
          <div className="books">
       
            <img src="/images/Harry Potter e a Camara Secreta.JPG" alt="" /><br />
            <post>Harry Potter e a Camara Secreta</post> <br />
            <input className="buttons" type="button" value="Comprar" />
            <Botao/>
            </div>
       
       
       </div>
     </div>
     <Footter/>
   </div>
   
   


  )
  
}

export default App