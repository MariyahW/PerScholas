let button = document.getElementById("accBut");

button.addEventListener("click", event=>{
    event.preventDefault();
   let req = {
    "account_id":event.target.form[0].value,
    "limit":event.target.form[1].value,
    "products":event.target.form[2].selectedOptions
   }

})

// event.taret.form[0].value [1].value [2].selectedOptions.text