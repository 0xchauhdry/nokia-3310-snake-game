//initialization 
const grid = document.querySelector('.grid')

function createGrid(){
    // Creating Grid
    for (let i=0; i < 100; i++){
        const box = document.createElement('div')
        //box.classList.add('box')
        grid.append(box)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createGrid()
})