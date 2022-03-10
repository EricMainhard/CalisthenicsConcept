import React, { useContext } from 'react'
import reactDom from 'react-dom';
import { CartContext } from '../../Context';
import './purchaseForm.css';

function PurchaseForm({children}) {

  const handleModalContainerClick = (e) => {e.stopPropagation();}

  const {isFormOpen,handleOpenPurchaseForm} = useContext(CartContext);

  return reactDom.createPortal (
    <div className={`purchaseForm ${isFormOpen && 'isOpen'}`} onClick={(e)=>{handleOpenPurchaseForm(e)}}>
        <div className='purchaseFormContainer' onClick={handleModalContainerClick}>
          <button onClick={(e)=>{handleOpenPurchaseForm(e)}}>
            X
          </button>
          <form>
            <label>Name:</label>
            <input></input>
          </form>
        </div>
    </div>, document.getElementById('form')
  )
}

export default PurchaseForm