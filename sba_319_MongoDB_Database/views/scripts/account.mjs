let newAcc = document.getElementById("accountSelect");
let update = document.getElementById("accountUpdate");
let delAcc = document.getElementById("accountDelete");
newAcc.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(newAcc);

  const res = Object.fromEntries(formData);
  const newBody = JSON.stringify(res);
  console.log(formData);
  console.log(res);
  console.log(newBody);
  fetch("http://localhost:9999/accounts", {
    method: "post",
    body: newBody,
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });

  //
});

update.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(update);

  const res = Object.fromEntries(formData);
  let newBody;

  if (res.limit) {
    newBody = JSON.stringify({ limit: res.limit });
  }
  if (res.products) {
    newBody += JSON.stringify({ products: res.products });
  }

  await fetch(`http://localhost:9999/accounts/${res._id}`, {
    method: "patch",
    body: newBody,
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
});


delAcc.addEventListener("submit",async (event) => {
  event.preventDefault();
  const formData = new FormData(delAcc);

  const res = Object.fromEntries(formData);
  const newBody = JSON.stringify(res);

  console.log(formData);
  console.log(res);
  console.log(newBody);
  fetch("http://localhost:9999/accounts", {
    method: "delete",
    body: newBody,
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });

  //
});