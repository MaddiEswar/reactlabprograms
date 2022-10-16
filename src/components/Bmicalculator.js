import React, { useState } from "react";
function Bmicalculator(){
    const [height,setHeight]  = useState(0);
    const [weight,setWeight] = useState(0);
    const [bmi,setbmi] = useState("");
    const [value,setValue]=useState();
    const handlebmi = () =>{
        //var p=[weight/height/height];
        var p=[Number(weight) / Number(height) / Number(height)] * 10000
       setValue(p.toPrecision(1))
       //setValue(p.toFixed(1))
        console.log(p);
        if(p<16){
            setbmi("severe thinness");
        } else if (p>=16 && p<=17){
            setbmi("moderate thinness");
        } else if(p>17 && p<=18.5){
            setbmi("mild thinness");
        } else if(p>18.5 && p<=25){
            setbmi("normal");
        } else if(p>25 && p<=30){
            setbmi("overweight");
        } else if(p>30 && p<=35){
            setbmi("obese class1");
        } else if(p>35 && p<=40){
            setbmi("obese class2");
        } else if(p>40){
            setbmi("obese class3");
        }

    }
    return(
        <div>
            <h1>BMI calculator</h1>
            <label>Enter weight(kg):</label>
            <input type={Number} onChange={(e)=>setWeight(e.target.value)}/>  <br/>
            <label>Enter height(cm):</label>
            <input type={Number} onChange={(e)=>setHeight(e.target.value)}/>  <br/>
            <button onClick={handlebmi}>calculate</button>
            <h2>{value} - {bmi}  </h2>
        </div>
    );
}
export default Bmicalculator;