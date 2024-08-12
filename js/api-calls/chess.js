const urlChessStats = 'https://api.chess.com/pub/player/rtallarr/stats'

async function getRapidElo() {
    const response = await fetch(urlChessStats);
    const res = await response.json();
    return res
}

getRapidElo().then(data => 
    document.getElementById('chessRating').innerHTML = data.chess_rapid.last.rating
)