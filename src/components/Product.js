import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasketItem, getTotals, removeBasketItem } from '../redux/basketSlice'

const Product = () => {
  const products=useSelector(state=>state.products)
  const dispatch=useDispatch()
  const basket=useSelector(state=>state.basket.basketItems);
  const baskets=useSelector(state=>state.basket) 
  const {totalAmount}=useSelector(state=>state.basket);
  const money=useSelector((state)=>state.money);
  const {totalQuantity}=useSelector(state=>state.basket);


  useEffect(()=>{
    dispatch(getTotals());
  },[baskets,dispatch])

  const handleAddBasketItem=(product)=>{
    dispatch(addBasketItem(product))
  }


  return (
    <div className="total">
      <div className='basket-information-for-home text-light'>
        <span className='basket-info-head fw-bold'>Basket Information:</span>
        <span className='basket-info'>Total Amount: $ {totalAmount}</span>
        <span className='basket-info'>Total Quantity: {totalQuantity}</span>
      </div>
      <div className="container-fluid">
        <div className='row products mt-sm-2 mt-md-3'>
          {
            products.map((product)=>(
              <div key={product.id} className='d-flex mb-md-3 mb-sm-2 mb-1 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="product d-flex flex-column justify-content-between flex-wrap rounded-3">
                <div className="product-first-items">
                  <div className="d-flex justify-content-center"><img src={product.image} className='product-image img-fluid ' alt="" /></div>
                  <p className='fs-5 mt-2 ms-2'>{product.name}</p>
                </div>
                <div className="product-second-items">
                  <div>$ {product.price}</div>
                  <div className="actions mt-1">
                      <button onClick={()=>handleAddBasketItem(product)} className='btn btn-outline-success me-2' disabled={product.price+totalAmount>money.amount}>Buy</button>
                      <button onClick={()=>dispatch(removeBasketItem(product))} className='btn btn-outline-danger' disabled={!basket}>Remove</button>
                      <span className="d-inline ms-3 bg-outline-light fw-bold">Count:
                        { 
                          basket.map((basketItem)=>(
                          basketItem.id===product.id?<span key={basketItem.id} className=""> {basketItem.quantity}</span>: null))
                        }
                      </span>
                  </div>
                </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Product