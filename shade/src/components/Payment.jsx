import React from 'react'
// import GooglePayButton from '@google-pay/button-react';
import qr from "./qrCode.jpg"

const Payment = () => {
  return (
    <div  >
      <img className='h-[90%]' src={qr}/>
    </div>
  )
}

export default Payment