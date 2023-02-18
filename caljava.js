let input = document.getElementById('input');
const buttons = document.getElementsByClassName('btn');
for(item of buttons){
    item.addEventListener('click', (event) =>{
        buttonText=event.target.innerText;
        console.log(buttonText);
    })
    console.log("abcdef")
}
console.log("prasun");
