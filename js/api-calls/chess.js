const urlChessStats = 'https://api.chess.com/pub/player/rtallarr/stats'

async function getMostPlayed() {
    const response = await fetch(urlChessStats);
    const res = await response.json();
    return res
}

getMostPlayed().then(data => 
    document.getElementById('chessRating').innerHTML = data.chess_rapid.last.rating
)