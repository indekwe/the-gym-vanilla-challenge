const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const clickedButton= document.getElementById('btn');
const backgroundColor=document.querySelector(".color")
const clicking= function(){
    let randomColor=Math.floor(Math.random()*4)
    document.body.style.backgroundColor=colors[randomColor];
    backgroundColor.textContent = `${colors[randomColor]}`;
}

clickedButton.addEventListener('click', clicking)