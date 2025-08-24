const div = document.getElementById('container');
const resizeBtn = document.getElementById('resize')

let n = 16;

resizeBtn.addEventListener('click', () => {
     n = prompt('Enter a number between 2 and 64')
    while(n < 2 || n > 64){
        alert('Invalid number try again')
        n = prompt('Enter a number between 2 and 64')
    }

})


let grid = n * n;
let widthAndHeight = 600 / n;



for (let i = 0; i < grid; i++){
    const box = document.createElement('div');
    box.classList.add('box');

    box.style.width = `${widthAndHeight}px`
    box.style.height = `${widthAndHeight}px`
    //box.style.background = 'red'
    box.style.boxSizing = 'border-box'

    div.appendChild(box)
    
    
}

