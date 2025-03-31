async function getRepo(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


async function getProjects() {
    const response = (await fetch('https://api.github.com/users/rtallarr/events/public')).json();
    const pushEvents = (await response)
        .filter(event => event.type === "PushEvent" || event.type === "PullRequestEvent")
        .filter((event, index, self) => 
            index === self.findIndex(e => e.repo.name === event.repo.name)
        );

    await Promise.all(pushEvents.map(async (event) => {
        event.repo = await getRepo(event.repo.url);
    }));

    console.log("pushEvents:", pushEvents);
    return pushEvents;
}

getProjects().then(data => 
    data.forEach(event => {
        $("#github").append(`
            <div class="row">
                <div class="col-5"><a href="${event.repo.html_url}" onclick="repoLinkEvent('${event.repo.full_name}')" target="_blank">${event.repo.full_name}</a></div>
                <div class="col-7"><p>${event.repo.description || "No description provided"}</p></div>
            </div>
        `);
    })
);