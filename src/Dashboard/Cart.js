import React, {useState, useEffect, useContext} from 'react'
import "./Cart.css"
import food0 from "../images/fd0.png"
import food1 from "../images/fd1.png"
import food2 from "../images/fd2.png"
import food3 from "../images/fd3.png"
import food4 from "../images/fd4.png"
import food5 from "../images/fd5.png"
import { Context } from '../Utilities/Context'

// Our order function
const MiniCart = (props) => {

  // our context variable for this function
  let {value, setvalue} = useContext(Context)

  // function that deletes the order in the cart
  const Delete = () => {
    document.querySelector('.order').remove()   

    // decreases the number of items in the cart
    setvalue(value-1)
  }
  const foods = [food0, food1, food2, food3, food4, food5]
  
  return(
    <div className='order' style={props.style} key={props.kys}>
      <div className='sborder'>
        <div className='odrdets'>
            <img src={foods[props.dets.imgno]} className='itmpic' alt='itmpic'/>
            <div className='nmtb'>
              <div className='itemsname'>{props.dets.cnm}</div>
              <span className='orem' onClick={Delete}>Remove</span>
            </div>
            
        </div>
        <div className='qnt'>{props.dets.cqty}</div>
        <div className='oprc'>N {props.dets.cprce}.00</div>
        <div className='ttls'>N {props.dets.cqty*props.dets.cprce}.00</div>
        </div>
      
    </div>
  )
}

const Cart = (props) => {
    // displays the checkout tab anytime the checkout button is clicked
    const Check = () => {
        props.CheckOpn("checkout")
    }

    // our context variable for this function
    let {value, setvalue} = useContext(Context)

    let [orderitem, setorderitem] = useState([])
    let [ky, setky] = useState(0)

    // Adds items to the cart anytime the add to cart button is clicked
    useEffect(() => {
      if(props.dets.cqty>0){
        setorderitem(orderitem => [...orderitem, <MiniCart dets={props.dets} kys={ky}/>])
        setky(ky+1)
      }
    }, [props.dets])

    // resets the number of items in the cart anytime an item is added to the cart
    useEffect(() => {
      setvalue(orderitem.length)
      // console.log(orderitem)
    }, [orderitem])
    

  return (
    <div className='crtcrd'>
        <h2 className='crthd'>Your Cart</h2>
        <div className='crttbl'>
            <div className='crtli'>
                <div className='itm'>
                    <h4 className='itmhd colhd'>Item</h4>
                </div>
                <div className='itmqnt'>
                    <h4 className='qntyhd colhd'>Qty</h4>
                </div>
                <div className='itmprc'>
                    <h4 className='prchd colhd'>Unit Price</h4>
                </div>
                <div className='ttl'>
                    <h4 className='ttlhd colhd'>Sub-total</h4>
                </div>
            </div>
            <div className='crtsec'>
              {orderitem}
            </div>
            <div className='totaldiv'>Total: N{}</div>
            <button className='chckot' onClick={Check}>Checkout</button>
        </div>
    </div>
  )
}

export default Cart