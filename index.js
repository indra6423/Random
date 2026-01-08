let setup=document.getElementsByClassName("setup")[0]
let punch=document.getElementsByClassName("punchline")[0]
let button=document.getElementsByTagName("button")[0]
let timer=document.getElementsByClassName("timer")[0]
let joke_div=document.getElementsByClassName("joke")[0]
button.addEventListener("click",async()=>{
    joke_div.style.border="1px solid black"
    setup.innerText=""
    punch.innerText=""
    timer.innerText=""
    let response=await fetch("https://official-joke-api.appspot.com/random_joke")
    let joke=await response.json()
    setup.innerText="Q) "+joke.setup
    let countdown = 3;
    timer.innerText = `Answer in ${countdown}...`;

    let interval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            timer.innerText = `Answer in ${countdown}...`;
        } else {
            clearInterval(interval);
            timer.innerText = "";
            punch.innerText = joke.punchline;
        }
    }, 1000);
})