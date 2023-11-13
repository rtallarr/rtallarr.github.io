const apiUrl = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=3C4B81AC1341397A4D27CB13BAE3D6AE&steamid=76561199081630402&format=json'

async function getOwnedGames() {
    const response = await fetch(apiUrl);
    let data = await response.json()
    return data.response.game_count;
}

getOwnedGames().then(data => 
    //console.log(data)
    document.getElementById('gamesOwned').innerHTML = data
)