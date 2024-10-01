const circle = document.getElementById('circle');
const square = document.getElementById('square');
const rec = document.getElementById('rectangle');
let number = document.getElementById('number');
const btn = document.getElementById('button');

btn.onclick = () => {
    
    const box = document.getElementById('box');
    box.innerHTML = ''; 
    let count = parseInt(number.value); 

    if (count && count > 0) { 
        if (circle.checked) { 
            for (let i = 0; i < count; i++) {
                let shape = document.createElement('div'); 
                shape.classList.add('circle'); 
                box.appendChild(shape); 
            }
        } else if (square.checked) { 
            for (let i = 0; i < count; i++) {
                let shape = document.createElement('div'); 
                shape.classList.add('square'); 
                box.appendChild(shape); 
            }
        } else if (rec.checked) { 
            for (let i = 0; i < count; i++) {
                let shape = document.createElement('div'); 
                shape.classList.add('rectangle'); 
                box.appendChild(shape); 
            }
        }
    } else {
        alert("Please enter a valid number greater than 0."); 
    }
}
