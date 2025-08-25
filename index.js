const div = document.getElementById('container');
const resizeBtn = document.getElementById('resize')
const clearBtn = document.getElementById('clear')
const rainbowBtn = document.getElementById('rainbow')
const eraseBtn = document.getElementById('eraser')
const blackBtn = document.getElementById('black')




let n = 16;



resizeBtn.addEventListener('click', () => {
     n = prompt('Enter a number between 2 and 64')
    while(n < 2 || n > 64){
        alert('Invalid number try again')
        n = prompt('Enter a number between 2 and 64')
    }

    createGrid(n);

})

let mode;

rainbowBtn.addEventListener('click', () => {
    mode = 'rainbow'
})

eraseBtn.addEventListener('click', () => {
    mode = 'eraser'
})

blackBtn.addEventListener('click', () => {
    mode = 'black'
})

function getRandomColour(){
    return Math.floor(Math.random() * 256)
}





function createGrid(n){

    div.innerHTML = ''
    
    let grid = n * n;
    let widthAndHeight = 600 / n;

    for (let i = 0; i < grid; i++){

        const box = document.createElement('div');
        box.classList.add('box');
        
        box.style.width = `${widthAndHeight}px`
        box.style.height = `${widthAndHeight}px`
        //box.style.border = 'solid 1px'
        box.style.boxSizing = 'border-box'

        box.addEventListener('mouseenter', () => {

            if(mode == 'rainbow'){
                box.style.backgroundColor = `rgb(${getRandomColour()}, ${getRandomColour()}, ${getRandomColour()})`;
            }else if (mode == 'eraser'){
                box.style.backgroundColor = 'white'
            }else if (mode == 'black'){
                box.style.backgroundColor = 'black' 
            }else{
                box.style.backgroundColor = 'black' 
            }

        })

        clearBtn.addEventListener('click', () => {
            box.style.backgroundColor = 'white'
        })

    
        

        

       

        div.appendChild(box)
    }

    
    
}


createGrid(n);

