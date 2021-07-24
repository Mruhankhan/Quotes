let button = document.getElementById('button')
let h1 = document.getElementById('h1')
let copy = document.getElementById('copy')
let quotes = [
    "Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!",
    "Happy birthday! I hope all your birthday wishes and dreams come true.",
    "Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!",
    "May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!",
    "Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!",
    "Happy birthday to someone who is smart, gorgeous, funny and reminds me a lot of myself… from one fabulous chick to another!",
    "As you get older three things happen. The first is your memory goes, and I can’t remember the other two. Happy birthday!",
    "You are only young once, but you can be immature for a lifetime. Happy birthday!",
    "On your birthday, I thought of giving you the cutest gift in the world. But then I realized that is not possible because you yourself are the cutest gift in the world.",
    "Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!",
    "Hope your special day brings you all that your heart desires! Here’s wishing you a day full of pleasant surprises! Happy birthday!",
    "Sending your way a bouquet of happiness…To wish you a very happy birthday!",
    "Wishing you a beautiful day with good health and happiness forever. Happy birthday!",
    "On this wonderful day, I wish you the best that life has to offer! Happy birthday!",
    "I may not be by your side celebrating your special day with you, but I want you to know that I’m thinking of you and wishing you a wonderful birthday.",
    "Sending you a birthday wish wrapped with all my love. Have a very happy birthday!",
    "Happy birthday to you. From good friends and true, from old friends and new, may good luck go with you and happiness too!",
    "A simple celebration, a gathering of friends; here wishing you great happiness and a joy that never ends",
    "Happy birthday to one of my best friends. Here’s to another year of laughing at our own jokes and keeping each other sane! Love you and happy birthday!",
    "On this special day, I raise a toast to you and your life. Happy birthday.",
    "Words alone are not enough to express how happy I am you are celebrating another year of your life!",
    "Can’t believe how lucky I am to have found a friend like you. You make every day of my life so special. It’s my goal to make sure your birthday is one of the most special days ever",
    "I hope that today, at your party, you dance and others sing as you celebrate with joy your best birthday.",
    "I’m sending you this ironic birthday wish because I know you’re way too cool for ordinary human sentiments.",
    "I hope your celebration gives you many happy memories!"
]

copy.addEventListener('click', ()=>{
    window.navigator.clipboard.writeText(h1.innerText)
})

button.addEventListener('click', () =>{
let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
h1.innerHTML =  randomQuotes
})
