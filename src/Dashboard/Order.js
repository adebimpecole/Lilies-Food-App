import React from 'react'

const Order = (props) => {
  return (
    <div className='crtcrd'>
        <h2 className='crthd'>Your Cart</h2>
        <div className='crttbl'>
            <div className='crtli'>
                <div className='itm'>
                    <h4 className='itmhd colhd'>Item</h4>
                    <div className='items'></div>
                </div>
                <div className='sitmqnt'>
                    <h4 className='qntyhd colhd'>Qty</h4>
                    <div className='qnty'></div>
                </div>
                <div className='itmprc'>
                    <h4 className='prchd colhd'>Price</h4>
                    <div className='price'></div>
                </div>
                <div className='sttl'>
                    <h4 className='ttlhd colhd'>Status</h4>
                    <div className='ttls'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order