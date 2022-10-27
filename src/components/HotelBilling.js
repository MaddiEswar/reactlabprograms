import React, { useState , useRef } from "react";

export default function HotelBilling(){
    const selectRef = useRef();
    const [quantity, setQuantity] = useState();
    const [listItems, setListItems] = useState([]);
    const [name, setName] = useState("");

    const menu = [
        { itemName: "Briyani", price: 210 },     
        { itemName: "Fried Rice", price: 180 },
        { itemName: "Manchuria", price: 120 },
        { itemName: "Gobi Manchurian", price: 130 },
      ];
    
      const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        setQuantity("");
      };

      const handleAddItem = (e) => {
        e.preventDefault();
        const item = menu.find((item) => {
          return item.itemName === name;
        });
    
     const itemPrice = item.price
        if (name !== "Please Select") {
          setQuantity(e.target.value);
          const index = findDuplicate(name);
         
          if (listItems.length === 0)
            setListItems([{ name, noOfItems: parseInt(e.target.value), totalPrice: itemPrice * e.target.value}]);
          else 
          if(index!== -1){
            const myList = [...listItems];
            myList[index].noOfItems = parseInt(myList[index].noOfItems) + parseInt(e.target.value);
            myList[index].totalPrice = myList[index].noOfItems * itemPrice;    
            setListItems(myList);    
          } 
          else
          setListItems([...listItems, { name, noOfItems: parseInt(e.target.value), totalPrice: itemPrice * e.target.value }]);
        }
      };

    const findSum = () =>{
        return listItems?.reduce((acc,item)=> acc+item.totalPrice, 0);
      }
    
      const findDuplicate = (name) => {
        const index = listItems.findIndex((item)=>{
          return item.name === name
        })
        return index;
      };

      const handleDelete = (item) => {
        const fitems = listItems.filter((it) => it !== item);
        setQuantity('');
        setListItems([...fitems]);
      };
    
      const tdata = listItems.map((it, index) => (
        <tr key={index}>
          <td>
            {" "}
            <span>{it.name} </span>{" "}
          </td>
          <td>
            {"                              "}
            <span>{it.noOfItems} </span>{" "}
          </td>
          <td>
            {" "}
            <span>{it.totalPrice} </span>{" "}
          </td>
          <td>
            <button onClick={(e) => {e.preventDefault();
              handleDelete(it);}}>x</button>
          </td>
        </tr>
      ));
    return(
        <div>
            <h1>Green Star Hotel</h1>
            <h5>Customer Bill</h5>
            <hr/>
            <h5>Date: {new Date().getDate()}{"/"}{new Date().getMonth() +"/"}{new Date().getFullYear()}</h5>
            <label for="Items">Items:</label>
            <select name="itemList" id="itemList" ref={selectRef}  onChange={handleChange}>
                <option value='Please Select'>Please Select</option>
                    {menu.map((item) => {
                        return <option value={item.itemName}>{item.itemName}</option>;
                })}
            </select>
            <label>No of Items:</label>
            <input type="number" onChange={handleAddItem} value={quantity}></input>
            
            <br/> <br/>
            <table align='center' border="1">
                <tr>
                    <th>Item Name</th>
                    <th>No of Items</th>
                    <th>Price</th>
                </tr>
                {tdata}
                <tr>
                    <td colspan="4">GST (5%): {(0.05*findSum())}</td>
                </tr>
                <tr>
                    <td colspan="4">Total Bill : {findSum()+(0.05*findSum())}</td>
                </tr>  
            </table>
           
        </div>
    );
}