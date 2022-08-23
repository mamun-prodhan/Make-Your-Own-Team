const playerArray = [];

//function for create selected player list
function display(selectedTotalPlayer) {
    const playerList = document.getElementById('football-players');
    playerList.innerHTML = '';

    for (let i = 0; i < selectedTotalPlayer.length; i++) {
        const playerName = selectedTotalPlayer[i];
        const playerListItem = document.createElement('li');
        playerListItem.innerText = playerName;
        playerList.appendChild(playerListItem);
    }
}

//onclick function for player select button
function selectPlayer(element) {
    const selectPlayerName = element.parentNode.parentNode.children[0].innerText;
    if (playerArray.length + 1 <= 5) {
        playerArray.push(selectPlayerName);
        document.getElementById('selected-player-number').innerText = playerArray.length;
        element.disabled = true;
        element.style.backgroundColor = 'salmon';
        display(playerArray);
    }
    else {
        alert('already selected 5 players');
    }
}

//function for get input field value by id using .value
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

//function for get text element value by id using innerText
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

//function for set text element value by id using innerText
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

//selected player cost calculation using eventhandler[Calculate Button]
document.getElementById('calculate-per-player').addEventListener('click', function(){
    // total selected player number
    const totalPlayerElement = document.getElementById('football-players');
    const totalPlayer = totalPlayerElement.childNodes.length;
    console.log(totalPlayer);

    //per player cost calculation
    const perPlayerCost= getInputFieldValueById("cost-per-player");
    const allPlayerCost = totalPlayer * perPlayerCost;
    document.getElementById('player-expenses').innerText = allPlayerCost;
})

//total cost calculation using eventhandler [Calculate Total Button]
document.getElementById('calculate-total').addEventListener('click', function(){
    const managerCost = getInputFieldValueById("manager-cost");
    const coachCost = getInputFieldValueById("manager-cost");
    const playerExpenses = getTextElementValueById("player-expenses");
    const totalCostCalculation = managerCost + coachCost + playerExpenses;
    setTextElementValueById("total-cost", totalCostCalculation);
})


