function TopButtonEvent(link) {
    let now = new Date();
    let currentDate = now.toLocaleDateString('en-GB', { weekday: 'long', month: '2-digit', day: '2-digit' });
    let currentTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let date = currentDate + ' ' + currentTime;
    console.log(date);
    Lit.event('Social Links', {
        metadata: {
          'link': link,
          'date': date
        }
    });
}

function NavEvent(link) {
    let now = new Date();
    let currentDate = now.toLocaleDateString('en-GB', { weekday: 'long', month: '2-digit', day: '2-digit' });
    let currentTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let date = currentDate + ' ' + currentTime;
    Lit.event('Nav Links', {
        metadata: {
          'link': link,
          'date': date
        }
    });
}

function repoLinkEvent(repo) {
    let now = new Date();
    let currentDate = now.toLocaleDateString('en-GB', { weekday: 'long', month: '2-digit', day: '2-digit' });
    let currentTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let date = currentDate + ' ' + currentTime;
    Lit.event('Repo Links', {
        metadata: {
          'repo': repo,
          'date': date
        }
    });
}