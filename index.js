const div = document.getElementById('container')
const resizeBtn = document.getElementById('resize')
let number;
let gridSize = 0;

for(let i = 0; i < 256; i++){
    const box = document.createElement('div')
    box.classList.add('box')
  
    div.appendChild(box)
}

resizeBtn.addEventListener('click', () =>{
        number = prompt('Enter a number between 2 and 64')

    if (number > 64 || number < 2){
        number = prompt('Enter a number between 2 and 64')
    }
})

gridSize = number * number;




//need to add mouse hover
//need to add a button to change the grid board to different numbers