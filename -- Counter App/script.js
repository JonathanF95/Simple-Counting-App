const count = document.querySelector('.count');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const reset = document.querySelector('.reset');

subtract.addEventListener('click', () =>{
    count.textContent--;
      if(count.textContent == 0){
        count.style.color = 'white';
      }else if(count.textContent < 0){
            count.style.color = 'red';
        }
})

reset.addEventListener('click', () =>{
    count.textContent = 0;
    count.style.color = 'white';
})

add.addEventListener('click', () => {
    count.textContent++;
    if(count.textContent == 0){
        count.style.color = 'white';
    }else if(count.textContent > 0){
            count.style.color = 'green';
        }
})