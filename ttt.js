let cells = document.querySelectorAll('td');
console.log(cells);
for (let c of cells){
    c.onclick = ()=>{
        c.innerText = 'X';
    }
}