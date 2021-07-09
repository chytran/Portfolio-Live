function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

// If the item has been clicked, show item
// variables for each item in shopping cart
let shop1 = document.querySelector(".shopping__1");
let shop2 = document.querySelector(".shopping__2");
let shop3 = document.querySelector(".shopping__3");
let shop4 = document.querySelector(".shopping__4");
let shop5 = document.querySelector(".shopping__5");

// variables of total price of the amount with the number of items
let itemPrice1 = document.querySelector(".shopping__price__1");
let itemPrice2 = document.querySelector(".shopping__price__2");
let itemPrice3 = document.querySelector(".shopping__price__3");
let itemPrice4 = document.querySelector(".shopping__price__4");
let itemPrice5 = document.querySelector(".shopping__price__5");

// variables to get the amount total of each item
let itemAmount1 = document.querySelector(".shopping__amount__1");
let itemAmount2 = document.querySelector(".shopping__amount__2");
let itemAmount3 = document.querySelector(".shopping__amount__3");
let itemAmount4 = document.querySelector(".shopping__amount__4");
let itemAmount5 = document.querySelector(".shopping__amount__5");

// if item exist, show cart
// ============ Jacket ================ 
if (getCookie("Black Leather Jacket")){
    // displays the item if user add at least one item to cart
    shop1.style.display = "flex";

    // displays how many jackets user added to cart
    itemAmount1.innerHTML = parseInt(getCookie("Black Leather Jacket"));

    // displays amount total for the jacket
    itemPrice1.innerHTML = "$" + (itemAmount1.innerHTML * 124.99).toFixed(2); 
}

/* ==================== Hoodie ====================*/
if (getCookie("Black Hoodie")){
    // displays the item if user add at least one item to cart
    shop2.style.display = "flex";

    // displays how many Hoodies user added to cart
    itemAmount2.innerHTML = parseInt(getCookie("Black Hoodie"));

    // displays amount total for the Hoodies
    itemPrice2.innerHTML = "$" + (itemAmount2.innerHTML * 25.99).toFixed(2); 
}

/* ==================== Black Button Up ====================*/
if (getCookie("Black Button Up")){
    // displays the item if user add at least one item to cart
    shop3.style.display = "flex";

    // displays how many Hoodies user added to cart
    itemAmount3.innerHTML = parseInt(getCookie("Black Button Up"));

    // displays amount total for the Hoodies
    itemPrice3.innerHTML = "$" + (itemAmount3.innerHTML * 29.99).toFixed(2); 
}

/* ==================== Navy Suit ====================*/
if (getCookie("Navy Suit")){
    // displays the item if user add at least one item to cart
    shop4.style.display = "flex";

    // displays how many Hoodies user added to cart
    itemAmount4.innerHTML = parseInt(getCookie("Navy Suit"));

    // displays amount total for the Hoodies
    itemPrice4.innerHTML = "$" + (itemAmount4.innerHTML * 679.99).toFixed(2); 
}

/* ==================== Black Watch ====================*/
if (getCookie("Black watch")){
    // displays the item if user add at least one item to cart
    shop5.style.display = "flex";

    // displays how many Hoodies user added to cart
    itemAmount5.innerHTML = parseInt(getCookie("Black watch"));

    // displays amount total for the Hoodies
    itemPrice5.innerHTML = "$" + (itemAmount5.innerHTML * 399.99).toFixed(2); 
}

// Total Prices gathered up
let totalPrice = document.querySelector(".shop__total__cost");


totalPrice.innerHTML = 
    "$" +
    ((itemAmount1.innerHTML * 124.99) +
    (itemAmount2.innerHTML * 25.99) +
    (itemAmount3.innerHTML * 29.99) +
    (itemAmount4.innerHTML * 679.99) +
    (itemAmount5.innerHTML * 399.99)).toFixed(2);


// Total price before tax
let totalNonTax = document.querySelector(".before__tax__price");

totalNonTax.innerHTML = 
    "$" +
    ((itemAmount1.innerHTML * 124.99) +
    (itemAmount2.innerHTML * 25.99) +
    (itemAmount3.innerHTML * 29.99) +
    (itemAmount4.innerHTML * 679.99) +
    (itemAmount5.innerHTML * 399.99)).toFixed(2);


// calculating tax to be collected after all items calculated
let estimatedTax = document.querySelector(".estimated__amount");

estimatedTax.innerHTML = 
    "$" +
    (((itemAmount1.innerHTML * 124.99) +
    (itemAmount2.innerHTML * 25.99) +
    (itemAmount3.innerHTML * 29.99) +
    (itemAmount4.innerHTML * 679.99) +
    (itemAmount5.innerHTML * 399.99)) * 0.08).toFixed(2);


// Sum of the price and tax
let completePrice = document.querySelector(".complete__total__price");

completePrice.innerHTML =
    "$" +
    (
        // add taxes
        (((itemAmount1.innerHTML * 124.99) +
        (itemAmount2.innerHTML * 25.99) +
        (itemAmount3.innerHTML * 29.99) +
        (itemAmount4.innerHTML * 679.99) +
        (itemAmount5.innerHTML * 399.99))* 0.08) 
        
        + 

        // add price without tax
        ((itemAmount1.innerHTML * 124.99) +
        (itemAmount2.innerHTML * 25.99) +
        (itemAmount3.innerHTML * 29.99) +
        (itemAmount4.innerHTML * 679.99) +
        (itemAmount5.innerHTML * 399.99))   
        
        +

        8 // This is the shipping price
    ).toFixed(2);

/* ================ Deleting items if clicked on ====================*/
// variables
let remove1 = document.querySelector(".remove__1");
let remove2 = document.querySelector(".remove__2");
let remove3 = document.querySelector(".remove__3");
let remove4 = document.querySelector(".remove__4");
let remove5 = document.querySelector(".remove__5");


// on click, delete the targetted item
remove1.addEventListener('click', ()=>{
    console.log("success");
    document.cookie="Black Leather Jacket=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"

})

remove2.addEventListener('click', ()=>{
    console.log("success");
    document.cookie="Black Hoodie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"

})

remove3.addEventListener('click', ()=>{
    console.log("success");
    document.cookie="Black Button Up=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"

})

remove4.addEventListener('click', ()=>{
    console.log("success");
    document.cookie="Navy Suit=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"

})

remove5.addEventListener('click', ()=>{
    console.log("success");
    document.cookie="Black watch=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"

})