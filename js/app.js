
const playerArray = [];

function display(selectedTotalPlayer) {
    for (let i = 0; i < selectedTotalPlayer.length; i++) {
        // console.log(selectedTotalPlayer[i]);
        const playerName = selectedTotalPlayer[i];
        const playerList = document.getElementById('football-players');
        const listItem = document.createElement('li');

        listItem.innerText = playerName;
        playerList.appendChild(listItem);
    }
}

function selectPlayer(element) {
    const selectPlayerName = element.parentNode.parentNode.children[0].innerText;
    if (playerArray.length + 1 <= 3) {
        playerArray.push(selectPlayerName);
        element.disabled = true;

        document.getElementById('selected-player-number').innerText = playerArray.length;
        console.log(playerArray);
        display(playerArray);
    }
    else {
        alert('already selected 5 players');
    }



}