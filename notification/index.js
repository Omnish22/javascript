function createCard (msg){
    let toast = document.querySelector('.toast');

    let card = document.createElement('div');
    let img = document.createElement('img');
    img.classList.add('icon')
    img.setAttribute('src',`images/${msg}.png`)
    card.classList.add('card');
    card.appendChild(img)
    
    console.log(card)
    card.classList.add(msg);
    // Create a text node for the message and append it to the card
    let textNode = document.createTextNode(msg.charAt(0).toUpperCase() + msg.slice(1));
    card.appendChild(textNode);
    toast.appendChild(card)

    setTimeout(()=>{
        card.remove();
    }, 6000)
}