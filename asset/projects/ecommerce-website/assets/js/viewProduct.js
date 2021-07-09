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

let watch = document.querySelector("#cart-5");

// item 5
var currentItem5 = 0;
watch.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "Black watch= " + (currentItem5++ + 1);

    document.querySelector(".added__5").style.display = "block";
})