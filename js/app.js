
const playerArray = [];

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

function selectPlayer(element) {
    const selectPlayerName = element.parentNode.parentNode.children[0].innerText;
    if (playerArray.length + 1 <= 5) {
        playerArray.push(selectPlayerName);
        document.getElementById('selected-player-number').innerText = playerArray.length;
        element.disabled = true;
        display(playerArray);
    }
    else {
        alert('already selected 5 players');
    }
}