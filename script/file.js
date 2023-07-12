let arrayQuote = ["“Be yourself; everyone else is already taken.”","“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","“So many books, so little time.”"]
let quote = document.getElementById("quote"); 
function setQuote(){
    let ex = true; 
    while(ex){
        let random = Math.ceil(Math.random()*3);
        if(arrayQuote[random] != quote.innerText){
            ex = false;
            quote.innerText = arrayQuote[random];
            console.log(random)
        }
    }
    
}