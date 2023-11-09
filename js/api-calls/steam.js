const apiUrl = ' http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=ABEE14437DCEF213B01CC2A90AE407CD&steamid=76561199081630402&format=json'

async function getOwnedGames() {
    const response = await fetch(apiUrl);
    let data = await response.json()
    return data.response.game_count;
}

getOwnedGames().then(data => 
    //console.log(data)
    document.getElementById('gamesOwned').innerHTML = data
)