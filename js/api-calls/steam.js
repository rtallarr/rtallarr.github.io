const baseUrl = 'https://rtback-efcjbhcqghbwfgf5.eastus-01.azurewebsites.net'
const urlGameCount = `${baseUrl}/steam/gameCount`
const urlMostPlayed = `${baseUrl}/steam/mostPlayed`

const idGames = [
    {"id": 252490, "name": "Rust"},
    {"id": 1258080, "name": "Shop Titans"},
    {"id": 311210, "name": "Call of Duty®: Black Ops III"},
    {"id": 526870, "name": "Satisfactory"},
]

async function getOwnedGames() {
    const response = await fetch(urlGameCount);
    //console.log(response);
    return response.text();
}

async function getMostPlayed() {
    const response = await fetch(urlMostPlayed);
    const res = await response.json();
    //console.log(res);
    return res
}

getOwnedGames().then(data => 
    //console.log(data),
    document.getElementById('gamesOwned').innerHTML = data
)

getMostPlayed().then(data => 
    //console.log(idGames.find(x => x.id == data.appid)['name'] + ' ' + data.playtime_forever)
    document.getElementById('mostPlayed').innerHTML = idGames.find(x => x.id == data.appid)['name'] + ' - ' + (data.playtime_forever / 60).toFixed(1) + ' hours'
)