function TopButtonEvent(link) {
    Lit.event('Social Links', {
        metadata: {
          'link': link
        }
    });
}

function NavEvent(link) {
    Lit.event('Nav Links', {
        metadata: {
          'link': link
        }
    });
}