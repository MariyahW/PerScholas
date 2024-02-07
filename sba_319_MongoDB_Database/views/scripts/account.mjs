

let form = document.getElementById("accountSelect");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(form);

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
    
//    let req = {
//     "account_id":event.target.form[0].value,
//     "limit":event.target.form[1].value,
//     "products":event.target.form[2].selectedOptions
//    }

})

// event.taret.form[0].value [1].value [2].selectedOptions.text