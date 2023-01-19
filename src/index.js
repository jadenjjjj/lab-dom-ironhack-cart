// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here product and documents
  const priceElement = product.querySelector(".price span").innerText;
  const quantityElement = product.querySelector(".quantity input").value;

  const subtotalElement = priceElement * quantityElement;
  product.querySelector(".subtotal span").innerHTML = subtotalElement; //get the subtotal;
  const input1  = document.getElementById('total1');
  const input2  = document.getElementById('total2');
  const sum = input1 + input2;
  
  return sum;
/*
  console.log('Calculating subtotal, yey!',
  priceElement,
  quantityElement,
  subtotalElement,);
*/
}

function calculateAll() {
    // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  //console.log("products");
  allProducts.forEach((element) => {updateSubtotal(element)});
  // end of test

  // ITERATION 3
  //... your code goes here
  const allSub = document.getElementById("total1").innerText;
  const allSub1 = parseInt(allSub);

  const allSub2 = document.getElementById("total2").innerText;
  const allSub3 = parseInt(allSub2);
  const sum = allSub1 + allSub3;
  //console.log(typeof(sum));

  const x = document.getElementById('total-value');
  const y = x.getElementsByTagName("span");
  y[0].innerText = sum;
  
  //console.log(y[0]);
  //document.getElementById('total-value').innerText = sum;
  //document.getElementById("total-value").innerHTML = updateSubtotal(document);
  //console.log(sum);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
