document.addEventListener("DOMContentLoaded", function() {
  
    let counter = document.getElementById("counterDisplay");
    let userInput = document.getElementById("userInput").value;
    // userInput = Number;
    //WHY IS THE USERINPUT KEEP RETURNING AS AN OBJECT I HATE LIFE!
    let plusButton = document.getElementById("plus");
    let minusButton = document.getElementById("minus");
    
    plusButton.addEventListener("click", function() {
        counter.innerText = userInput++;
    })

    minusButton.addEventListener("click", function() {
        counter.innerText = userInput--;
    })

    if (userInput % 1) {
        counter.style.color = "red";
    }

})
