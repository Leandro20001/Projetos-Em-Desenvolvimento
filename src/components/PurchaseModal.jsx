function Modal({isOpen,isClose}){
  if(isOpen)
  return(
    <>
    <div className="hide" id="fade">
    </div>

      <div className="hide" id="modal">
        <button onClick={isClose}>X</button>
        <p>testando</p>

      </div>

    
    </>
  )
}
export default Modal