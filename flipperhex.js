//an array consist of characters to make random color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//selecting html element by DOM
const clickedButton= document.getElementById('btn');
const backgroundColor=document.querySelector(".color")
//function that will loop over elements of hex array and generate single string of 7 character within an array to represent color
const clicking= function(){
    arrayColorReturn= function(){
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        // an array to recieve characters from hex array
        let hexColorArray= ['#'];
          //loop for iterating through hex array and genarate random 6 characters to form a color 
        for (i=0;i<6;i++){
            hexColorArray.push(hex[Math.floor(Math.random()*16)]);   
        }
        return hexColorArray.join('');
        }
        //assigning random colors generated to body background and background color text
    document.body.style.backgroundColor=arrayColorReturn();
    backgroundColor.textContent = `${arrayColorReturn()}`;
}
//connecting clicking action by user to the function which generate background colors randomly
clickedButton.addEventListener('click', clicking)