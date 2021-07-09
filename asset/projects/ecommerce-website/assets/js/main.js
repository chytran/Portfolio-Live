/*===== MENU SHOW ===== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", ()=> {
            nav.classList.toggle('show')
        })
    }
}

showMenu("nav-toggle","nav-menu")

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // Remove menu mobile
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// carts linking

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

// leather jacket to cart
let leatherJacket = document.querySelector("#cart-1");
let blackHoodie = document.querySelector("#cart-2");
let buttonUp = document.querySelector("#cart-3");
let suitUp = document.querySelector("#cart-4");
let watch = document.querySelector("#cart-5");

var shoppingAmount = document.querySelector(".shopping__cart__amount");

// item 1
var currentItem1 = 0;
leatherJacket.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "Black Leather Jacket= " + (currentItem1++ + 1);

    document.querySelector(".added__1").style.display = "block";
})

// item 2
var currentItem2 = 0;
blackHoodie.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "Black Hoodie= " + (currentItem2++ + 1);

    document.querySelector(".added__2").style.display = "block";
})

// item 3
var currentItem3 = 0;
suitUp.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "Navy Suit= " + (currentItem3++ + 1);

    document.querySelector(".added__4").style.display = "block";
})

// item 4
var currentItem4 = 0;
buttonUp.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "Black Button Up= " + (currentItem4++ + 1);

    document.querySelector(".added__3").style.display = "block";
})













