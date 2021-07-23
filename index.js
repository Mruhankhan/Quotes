let button = document.getElementById('button')
let h1 = document.getElementById('h1')
let copy =document.getElementById('copy')
let quotes = [
    "Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!",
    "Happy birthday! I hope all your birthday wishes and dreams come true.",
    "Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!",
    "May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!",
    "Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!",

]

copy.addEventListener('click', ()=>{
    window.navigator.clipboard.writeText(h1.innerText)
})

button.addEventListener('click', () =>{
let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
h1.innerHTML =  randomQuotes
})
let maxWidth = 600;
