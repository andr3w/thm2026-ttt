let cells = document.querySelectorAll('td');
console.log(cells);
for (let c of cells){
    c.onclick = ()=>{
        let wtg = document.getElementById('wtg').innerText;
        c.innerText = wtg;
        wtg = (wtg == 'X') ? 'O' : 'X';
        document.getElementById('wtg').innerText = wtg;
    }
}