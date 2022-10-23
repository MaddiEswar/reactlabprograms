import React, { useState } from "react";

export default function EmiCalculator(){
    const [amount,setAmount] = useState(0);
    const [tenure,setTenure] = useState(0);
    const [tenuretype,setTenuretype] = useState("");
    const [interestrate,setInterestrate] = useState(0);
    const [result,setResult] = useState();
    const calculateemi =() =>{
        console.log(tenuretype);
        console.log(amount);
        console.log(tenure);

        if(tenuretype==="Months"){
            var r=amount*interestrate*((Math.pow((1+interestrate),tenure)/(Math.pow((1+interestrate),tenure)-1)));
            setResult(r.toFixed(2));
            console.log(r);
        }
        if(tenuretype==="Years"){
            var r=amount*interestrate*((Math.pow((1+interestrate),tenure*12)/(Math.pow((1+interestrate),tenure*12)-1)));
            setResult(r.toFixed(2));
            console.log(r);
        }
    }
    const clear =(e)=>{
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
          setResult(0)
       
    }
    return(
        <div>
            <h1>EMI Loan Calculator</h1>
            <table align="center">
                <tr>
                    <td>Loan Amount:</td>
                    <td><input type={Number} onChange={(e) => setAmount(e.target.value)}/></td>
                </tr>

                <tr>
                    <td>Loan Tenure:</td>
                    <td><input type={Number} onChange={(e) => setTenure(e.target.value)}/></td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <select id="tenuretype" value={tenuretype} onChange={(e)=>setTenuretype(e.target.value)}>
                            <option name="tenure" value="Months" >Months</option>
                            <option name="tenure" value="Years" >Years</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td>Interest Rate:% </td>
                    <td><input type={Number} onChange={(e) => setInterestrate(e.target.value)}/></td>
                </tr>

                <tr></tr>

                <tr>
                    <td>
                        <button onClick={clear}>Clear</button>
                    </td>
                    <td>
                        <button onClick={calculateemi}>Calculate</button>
                    </td>
                </tr>

                
            </table>
            <h1>{result}</h1>
        </div>
    );

}