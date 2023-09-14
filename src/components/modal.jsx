
export default function Modal({open,children}){

  if(open){
    return(
      <>
      <div id="fade"></div>

      <div id="modal">

        <espaco>
          <span id="modal-title">Cosmos</span>
          <p id="modal-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci rem beatae odio quasi. Dicta suscipit aspernatur accusamus, architecto mollitia tempora eaque quo sint at eius sequi enim quae molestiae quos?</p>
          <img src="../images/cosmos.JPG" alt="" />
          {children}
        </espaco>

      </div>
      </>
    )}else return null
  }
