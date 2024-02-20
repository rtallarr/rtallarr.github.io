const apiUrl = 'https://rtback.azurewebsites.net/steam/gameCount'

async function getOwnedGames() {
    const response = await fetch(apiUrl);
    return response.text();
}

getOwnedGames().then(data => 
    //console.log(data)
    document.getElementById('gamesOwned').innerHTML = data
)