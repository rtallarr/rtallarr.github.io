const year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
if (month < 10) {
    month = `0${month}`
}

const urlChessStats = 'https://api.chess.com/pub/player/rtallarr/stats'
const urlChessElo = `https://api.chess.com/pub/player/rtallarr/games/${year}/${month}`

async function getChessData() {
    const response = await fetch(urlChessStats);
    return response.json()
}

async function getEloMonth() {
    const response = await fetch(urlChessElo);
    return response.json()
}

getEloMonth().then(data => {
    console.log(data)
})

getChessData().then(data => {
    var played = data.chess_rapid.record.draw+data.chess_rapid.record.win+data.chess_rapid.record.loss;
    document.getElementById('chessRating').innerHTML = data.chess_rapid.last.rating;
    document.getElementById('chessGames').innerHTML = played;
})