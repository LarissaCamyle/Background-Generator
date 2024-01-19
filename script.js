var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradient");


function background (){
    body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value+ ")";
    console.log("background:" + body.style.background + ";");

}

color1.addEventListener("input", function(){
   background();
})

color2.addEventListener("input", function(){
    background();  
})