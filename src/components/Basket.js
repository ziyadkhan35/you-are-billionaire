import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { clearBasket } from '../redux/basketSlice';

const Basket = () => {
    const dispatch=useDispatch()
    const basket=useSelector(state=>state.basket.basketItems);
    const {totalQuantity}=useSelector(state=>state.basket);
    const {totalAmount}=useSelector(state=>state.basket);

    const handleClearBasket=()=>{
      dispatch(clearBasket());
    }

  return (
    <>
    <h3 className="basket-text display-2 fw-bold text-center">Basket</h3>
    <div className='basket-container container '>
        <div className="row">
          <div className="col-12 ">
            <div className="text-light">
              {
                basket.map((basketItem)=>(
                    <div key={basketItem.id} className="">{basketItem.name}--{basketItem.quantity}</div>
                ))
              }
              <div className='display-4 mb-3 '>Total Product Quantity: <span className='text-warning'>{totalQuantity}</span></div> 
              <div className="display-4 mb-3">Total Money: <span className='text-warning'>{totalAmount}</span></div>
              <button className='btn btn-outline-danger' onClick={()=>handleClearBasket()}>Clear Basket</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Basket