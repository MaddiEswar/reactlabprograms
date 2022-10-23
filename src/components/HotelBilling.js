import React, { useState } from "react";

export default function HotelBilling(){
    const [item,setItem] = useState("");
    const [number,setNumber] = useState();
    const [items,setItems] = useState([]);

    const handleAdd =()=>{
        setItems([...items,{"item":item,"number":number}]);
        setItem("");
    }
    console.log(items);

    const tdata = items.map((it,index) =>(
        <tr key={index}>
            <td>{index+1+"."}</td>
            <td>{it.item}</td>
            <td>{it.number}</td>
        </tr>
    ),[]);

    return(
        <div>
            <h1>Green Star Hotel</h1>
            <h5>Customer Bill</h5>
            <hr/>
            <h5>Date: {new Date().getDate()}{"/"}{new Date().getMonth() +"/"}{new Date().getFullYear()}</h5>
            <label for="Items">Items:</label>
            <select value={item} onChange={(e) => setItem(e.target.value)}>
                <option name='item' value='Biryani'>Biryani</option>
                <option name='item' value='Fried Rice'>Fried Rice</option>
                <option name='item' value='Chapathi'>Chapathi</option>
                <option name='item' value='Mushroom Curry'>Mushroom Curry</option>
            </select>
            <label>No of Items:</label>
            <input type={Number} onChange={(e) => setNumber(e.target.value)}></input>
            <button onClick={handleAdd}>Add</button>
            <br/> <br/>
            <table align='center'>
                <tr>
                    <th>S.No</th>
                    <th>Item</th>
                    <th>Quantity</th>
                </tr>
                {tdata}
                
            </table>
            <table>
                <td>Total:</td>
            </table>
        </div>
    );
}