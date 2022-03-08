
const btnEl1 = document.getElementById("button-1");
const btnEl2 = document.getElementById("button-2");
const btnEl3 = document.getElementById("button-3");
const taskUl = document.getElementById("task-ul");
const priceUl = document.getElementById("price-ul");
const invoiceBtn = document.getElementById("invoice-btn");
const deleteBtn = document.getElementById("delete");
const totalEl = document.getElementById("total-el");

let jobs = [
    { task: "Wash Car", price: 10 },
    { task: "Mow Lawn", price: 20 },
    { task: "Pull Weeds", price: 30 },
    
  ];

btnEl1.addEventListener("click", () => {
    taskUl.innerHTML += `<li>${jobs[0].task}</li>`
    priceUl.innerHTML += `<li><span>$</span>${jobs[0].price}</li>`
    
})

btnEl2.addEventListener("click", () => {
    taskUl.innerHTML += `<li>${jobs[1].task}</li>`
    priceUl.innerHTML += `<li><span>$</span>${jobs[1].price}</li>`
    
})

btnEl3.addEventListener("click", () => {
    taskUl.innerHTML += `<li>${jobs[2].task}</li>`
    priceUl.innerHTML += `<li><span>$</span>${jobs[2].price}</li>`
    
})







