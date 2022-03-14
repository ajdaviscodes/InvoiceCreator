const btnEl1 = document.getElementById("button-el1");
const btnEl2 = document.getElementById("button-el2");
const btnEl3 = document.getElementById("button-el3");
const invoiceBtn = document.getElementById("invoice-button");

let cartListEl = document.getElementById("cart-list-el");
let totalEl = document.getElementById("total-el");


// service array
let serviceList = [
  { task: "Task 1", price: 10, id: 0 },
  { task: "Task 2", price: 20, id: 1 },
  { task: "Task 3", price: 30, id: 2 },
];

let totalPrice = 0;
let listItem;

// button event listeners and function calls
invoiceBtn.addEventListener("click", clearInvoice);

btnEl1.addEventListener("click", function () {
  render(serviceList[0]);
});
btnEl2.addEventListener("click", function () {
  render(serviceList[1]);
});
btnEl3.addEventListener("click", function () {
  render(serviceList[2]);
});

// pull data from array, render elements for DOM manipulation
function render(service) {
  //   update total
  totalPrice += service.price;
  // manipulate DOM to add services
  listItem = document.createElement("li");
  listItem.className = "list-item";
  listItem.innerHTML = `<p id="${service.id}">
                        <button id="delete-btn" onclick="deleteTask(${JSON.stringify(service).split('"').join("&quot;")})">X</button>
                        <span id="service-name">-${service.task}-</span>
                        <span id="service-price">$ ${service.price}</span>`;

                       
  //update cart and total
  cartListEl.appendChild(listItem);
  totalEl.innerHTML = `<span>$ </span> ${totalPrice}`;

// disable buttons in instance - deleting one item will reset all buttons allowing multiple of same task
  if (service.task === "Task 1") {
    btnEl1.disabled = true;
  }
  if (service.task === "Task 2") {
    btnEl2.disabled = true;
  }
  if (service.task === "Task 3") {
    btnEl3.disabled = true;
  }
}

function resetBtns(){
    btnEl1.disabled = false;
    btnEl2.disabled = false;
    btnEl3.disabled = false;
}
// delete task 
function deleteTask(service) {
    document.getElementById(service.id).remove();
    totalPrice -= service.price;
    totalEl.textContent = `$${totalPrice}`;
resetBtns();
 
}
// clear form
function clearInvoice() {
    cartListEl.innerHTML = "";
    totalPrice = 0;
    totalEl.innerHTML = `<span>$</span>`;
    resetBtns();
}