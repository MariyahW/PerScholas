/*Pulling Variables */
const button = document.querySelector("button");
const output = document.getElementById("output");
const BillAmt = document.getElementById("BillAmt");
const numGuest = document.getElementById("numGuest");
const percentTip = document.getElementById("percentTip");
console.log(button);


button.addEventListener("click",function(){
  /* Check for null values*/
  if (numGuest.value<=0){
    let temp ='<h1> Must Be At least one person </h1>';
    output.innerHTML = temp;
  }
    else if(percentTip.value<=0){
      let temp ='<h1> Must Be At Least 1% </h1>';
      output.innerHTML = temp;
    }
      /*complete calculations if no null values*/
  else {
    const tip = ((BillAmt.value *percentTip.value)/(numGuest.value)).toFixed(2);
    
    let temp = `<h1>You should each tip $${tip} on $${BillAmt.value}</h1>`;
    output.innerHTML = temp;
    BillAmt.value= "100";
    percentTip.value= "";
    numGuest.value= "1";
      }  
  })

                        
  
  
  
  




/*button.addEventListener("click",function(){
  const cost = document.querySelector("input");

  console.log(cost.value *0.15);
  let tip = (cost.value *0.15).toFixed(2);
  let temp = `<h1>You should tip $${tip} on $${cost.value}</h1>`;
  output.innerHTML = temp;*/




/*
button.addEventListener("click",function(){
    const cost = document.querySelector("input");
  
    console.log(cost.value *0.15);
    let tip = (cost.value *0.15).toFixed(2);
    let temp = `<h1>You should tip $${tip} on $${cost.value}</h1>`;
    output.innerHTML = temp;
}*/
