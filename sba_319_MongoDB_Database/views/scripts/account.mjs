

let newAcc = document.getElementById("accountSelect");
let update = document.getElementById("accountUpdate")

newAcc.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(newAcc);

   const res= Object.fromEntries(formData);
   const newBody = JSON.stringify(res);
   console.log(formData)
   console.log(res)
  console.log(newBody);
    fetch("http://localhost:9999/accounts",{
        method: "post",
        body: newBody,
        headers: {'Content-Type': 'application/json'}
      })  .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    
//  

})

update.addEventListener("submit", (event)=>{
  event.preventDefault();
  const formData = new FormData(update);

 const res= Object.fromEntries(formData);
 let newBody;
 if(res.limit && res.products){
  newBody = JSON.stringify(res);
 }else if(res.limit){
  newBody = JSON.stringify({"limit":res.limit});
 }else if(res.products){
  newBody = JSON.stringify({"products":res.products});
 }
  
 console.log(formData)
 console.log(res)
console.log(newBody);
  fetch(`http://localhost:9999/accounts/${res._id}`,{
      method: "patch",
      body: newBody,
      headers: {'Content-Type': 'application/json'}
    })  .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
  
//  

})

// event.taret.form[0].value [1].value [2].selectedOptions.text