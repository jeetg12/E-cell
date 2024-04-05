const menu = document.querySelector(".hamburger-menu");
const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    // Change CSS properties using JavaScript
    console.log("hey");
   
    if(  menu.style.display ==="flex"){
      menu.style.display ="none";
    }
    else{
      menu.style.display ="flex";

    }
    

    // You can add more style changes as needed
    // For example: this.style.backgroundColor = "red";
  });