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
            <h1>Great choice!</h1>
            <p>For security we need you to feel this form and that's all</p>
            <label htmlFor="">Name:</label>
            <input type="text"></input>
            <labe lhtmlFor="">Last name:</labe>
            <input type="text"></input>
            <label htmlFor="">Phone:</label>
            <input type="number" ></input>
            <label htmlFor="">Email:</label>
            <input type="email"></input>
            <label htmlFor="">City:</label>
            <input></input>
            <label htmlFor="">I wan't to receive offers and news</label>
            <input type="checkbox" name="" id="" />
          </form>
        </div>
    </div>, document.getElementById('form')
  )
}

export default PurchaseForm