let cards=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCm9L02jNXLjfobhRXEUKtBU0ttcd5e43T3A9bApjRyUnsueIZOwMQF9ERKhjKWJx0WM4&usqp=CAU",
        value:1,
        status:"closed"
    },
    {   
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCm9L02jNXLjfobhRXEUKtBU0ttcd5e43T3A9bApjRyUnsueIZOwMQF9ERKhjKWJx0WM4&usqp=CAU",
        value:1,
        status:"closed"
    },
    {
        image:"https://www.redwolf.in/image/catalog/designer-Images/themes/iron-man-artist-image.png",
        value:2,
        status:"closed"
    },
    {
        image:"https://www.redwolf.in/image/catalog/designer-Images/themes/iron-man-artist-image.png",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://images-na.ssl-images-amazon.com/images/I/511W25RBXFL._SX466_.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://images-na.ssl-images-amazon.com/images/I/511W25RBXFL._SX466_.jpg",
        value:5,
        status:"closed"
    },
]


//durnsten shuffling algorithm
let temp;
for(let i=cards.length-1; i>=0; i--){
    let j=Math.floor(Math.random()*(i+1));
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

let cardsCopy=cards;


function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`

            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})"></div>
            </div>

        `;  

    });

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;
        console.log(val1,val2);

        if(val1==val2){
            score++;
            document.getElementById('score').innerText=score;
//reset after one guess
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("game over");
            location.reload();
        

        }

    }

    displayCards(cards);
}













