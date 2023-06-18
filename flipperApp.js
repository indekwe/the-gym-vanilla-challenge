//an array consist of colors to be set to the background
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//selecting html element by DOM
const clickedButton= document.getElementById('btn');
const backgroundColor=document.querySelector(".color")
//function that will generate color to be set to the background from colors array randomly
const clicking= function(){
    let randomColor=Math.floor(Math.random()*4)
    document.body.style.backgroundColor=colors[randomColor];
    backgroundColor.textContent = `${colors[randomColor]}`;
}
//connecting clicking action by user to the function which generate background colors randomly
clickedButton.addEventListener('click', clicking)
