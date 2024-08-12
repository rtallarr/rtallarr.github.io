const urlChessStats = 'https://api.chess.com/pub/player/rtallarr/stats'

async function getChessData() { 
    const response = await fetch(urlChessStats);
    return response.json()
}

getChessData().then(data => {
    var played = data.chess_rapid.record.draw+data.chess_rapid.record.win+data.chess_rapid.record.loss;
    document.getElementById('chessRating').innerHTML = data.chess_rapid.last.rating;
    document.getElementById('chessGames').innerHTML = played;
})
