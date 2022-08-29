import React, { useState } from 'react';
import "../OrdersList/OrdersList.css"
import foodorder from '../OrdersList/foodorder.jpg'
import pizzaimg from "../OrdersList/pizzaimg.jpeg"

const OrdersList = () => {

const [state,setState] = useState(false)
const toggle=()=>{
setState(!state)
}


    return (
        <div className='order-container' >
            <div className='container' >

<div className='Order' >
    <div className='order-block' >
<img src={foodorder} alt="" />
<p>sjkebf</p>
<p>kajsdf</p>
<p>sadbf</p>
<button onClick={toggle}>

{state ? <div style={{background:'green'}} >active</div> : <div style={{background:'salmon'}} >complete</div>}

</button>
<p>sjdbf</p>
<p>jsdf</p>
    </div>
    <div className='order-block' >
<img src={pizzaimg} alt="" />
<p>sjkebf</p>
<p>kajsdf</p>
<p>sadbf</p>
<button >active</button>
<p>sjdbf</p>
<p>jsdf</p>
    </div>
</div>







            </div>
            <div>
      
    </div>
        </div>
    );
}

export default OrdersList;
