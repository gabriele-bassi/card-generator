
const loadCards = async()=>{
    let cards =await fetch("data.json")
    return await cards.json()
    
}
const shuffleCards = (cards)=>{
    let woringArray = new Array()
    cards.cards.forEach(sign => {
        console.log(sign)
        sign.signs.forEach(card=>{
            woringArray.push(card)
        })
    });
    return woringArray;
}

document.addEventListener("DOMContentLoaded",async()=>{
    let cards = await loadCards()
    let shuffled = shuffleCards(cards)
    let cardContainer = document.getElementById("card-container")
    let sum = 0;
    for(let i=0;i<40;i++){
        await new Promise(r => setTimeout(r, 1000));
        while (cardContainer.firstChild) {
            cardContainer.removeChild(cardContainer.lastChild);
        }

        let selectedCard = shuffled[Math.floor(Math.random()*52)]
        sum += parseInt(selectedCard.value)
        let cardItem = document.createElement("div")
        let cardTitle = document.createElement("h2")
        let cardImg = document.createElement("img")
        let cardSign = document.createElement("h4")
        
        cardItem.className = "card-item"
        cardTitle.className = "card-title"
        cardImg.className = "card-img"
        cardSign.className = "card-sign"
        cardTitle.textContent = selectedCard.number
        cardImg.src = selectedCard.img  
        cardSign.textContent = selectedCard.sign

        
        cardItem.appendChild(cardTitle)
        cardItem.appendChild(cardImg)
        cardItem.appendChild(cardSign)
        cardContainer.appendChild(cardItem)
    }
    
    let result = document.createElement("p")
    result.className = "result"
    result.innerHTML = `Risultato dell'algoritmo ZEN ${sum}` 
    cardContainer.appendChild(result)
})