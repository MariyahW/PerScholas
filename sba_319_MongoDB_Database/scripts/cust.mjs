const form = document.getElementById("mainSelect");
const main = document.querySelector("main-section");
const add = document.querySelector("add-section");

export  function getCustomer(event){
    if (event.target.value == "all") {
        add.innerHTML="";
         (async function () {
           let table = document.createElement("table");
           axios.get("http://localhost:9999/customers").then((customers) => {
             // console.log(customers.data)
    
             customers.data.forEach((customer) => {
               for (const key in customer) {
                 if (key !== "_id" && key !== "tier_and_details") {
                   let tr = document.createElement("tr");
                   let td = document.createElement("td");
    
                   td.innerHTML = `${key} :`;
                   td.appendChild(document.createTextNode(customer[key]));
                   td.style.border = "1px solid black";
                   tr.appendChild(td);
                   tr.style="page-break-after: always"
                   table.appendChild(tr);
                 }
               }
               table.className="tab";
             });
           });
           table.style.border = "3px solid blue";
           add.appendChild(table);
         })();
       } else if (event.target.value == "email") {
         add.innerHTML="";
    
         let form = document.createElement("form");
         let input = document.createElement('input');
         input.type="text";
         input.placeholder="Email"
         let sub = document.createElement('button');
         sub.innerHTML="Submit"
         form.appendChild(input);
         form.appendChild(sub);
         main.appendChild(form);
    
         sub.addEventListener("click", event=>{
           event.preventDefault();
           add.innerHTML=" "
           console.log(event.target.form[0].value)
           let table = document.createElement('table');
           (async function(){
             axios.get(`http://localhost:9999/customers/search?email=${event.target.form[0].value}`).then((customers)=>{
               console.log(customers)
               customers.data.forEach((customer) => {
               
               for (const key in customer) {
                 if (key !== "_id" && key !== "tier_and_details") {
                   let tr = document.createElement("tr");
                   let td = document.createElement("td");
    
                   td.innerHTML = `${key} :`;
                   td.appendChild(document.createTextNode(customer[key]));
                   td.style.border = "1px solid black";
                   tr.appendChild(td);
    
                   table.appendChild(tr);
                 }
               }
               table.style.borderBottomColor = "blue";
             });
           });
           table.style.border = "3px solid blue";
           add.appendChild(table);
         })();
       })
    } else if (event.target.value == "acct") {

        add.innerHTML="";
   
        let form = document.createElement("form");
        let input = document.createElement('input');
        input.type="text";
        input.placeholder="Account Number"
        let sub = document.createElement('button');
        sub.innerHTML="Submit"
        form.appendChild(input);
        form.appendChild(sub);
        main.appendChild(form);
   
        sub.addEventListener("click", event=>{
          event.preventDefault();
          add.innerHTML=" "
          console.log(event.target.form[0].value)
          let table = document.createElement('table');
          (async function(){
            axios.get(`http://localhost:9999/customers/search?account=${event.target.form[0].value}`).then((customers)=>{
              console.log(customers)
              customers.data.forEach((customer) => {
              
              for (const key in customer) {
                if (key !== "_id" && key !== "tier_and_details") {
                  let tr = document.createElement("tr");
                  let td = document.createElement("td");
   
                  td.innerHTML = `${key} :`;
                  td.appendChild(document.createTextNode(customer[key]));
                  td.style.border = "1px solid black";
                  tr.appendChild(td);
   
                  table.appendChild(tr);
                }
              }
              table.style.borderBottomColor = "blue";
            });
          });
          table.style.border = "3px solid blue";
          add.appendChild(table);
        })();
      })
      }
   
   
}
 
   
    //Create new
   
    //Update
   
    //delete

         
 


    
   
  