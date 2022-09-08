import React from 'react'
import { useSelector } from 'react-redux';

const YourMoney = () => {

    const money=useSelector((state)=>state.money);
    const {totalAmount}=useSelector(state=>state.basket);

  return (
    <div className='money'>
        {
            totalAmount>0 ? <div className='mny money-all display-3'><span className='dollar me-md-2'>$ </span> <span className="mny">{money.amount-totalAmount}</span></div> : <div className='mny money-all display-3'><span className='dollar me-ms-2'>$ </span> <span className="mny">{money.amount}</span></div>
        }
    </div>
  )
}

export default YourMoney