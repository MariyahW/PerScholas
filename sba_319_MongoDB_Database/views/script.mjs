const form = document.getElementById("mainSelect");
const main = document.querySelector("main-section");
const add = document.querySelector("add-section");
const space = document.createElement("br");
// import axios from "axios";

form.addEventListener("change", (event) => {
  let selection = event.target.value;
  if (selection == "cust") {
    //Selector with all or search by email search by account#
    let form = document.createElement("form");
    let select = document.createElement("select");
    let opt1 = document.createElement("option");
    let opt2 = document.createElement("option");
    let opt3 = document.createElement("option");
    let opt4 = document.createElement("option");
    let label = document.createElement("labe");

    opt1.value = "all";
    opt2.value = "email";
    opt3.value = "acct";
    opt4.value = "default";
    opt1.innerHTML = "All";
    opt2.innerHTML = "Email";
    opt3.innerHTML = "Account Number";
    opt4.innerHTML = " ";
    label.innerHTML = "How would you like to search?";
    label.for = select;
    select.appendChild(opt1);
    select.appendChild(opt2);
    select.appendChild(opt3);
    select.appendChild(opt4);
    select.value = opt4;
    form.appendChild(label);
    form.appendChild(select);
    main.appendChild(form);

    form.addEventListener("change", (event) => {
      console.log(event.target.value);
     
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

                  table.appendChild(tr);
                }
              }
              table.style.borderBottomColor = "blue";
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
    });
    //email http://localhost:9999/customers?email=
    //account http://localhost:9999/customers?account=

    //Create new

    //Update

    //delete
  } else if (selection == "account") {
    //Selector with all or search by email search by account#
    //account id http://localhost:9999/accounts/:id
    //Create new
    //Update
    //delete
  } else if (selection == "transaction") {
    //Selector with all or search by email search by account#
    //account id http://localhost:9999/accounts/:id
    //Create new
  }
});
