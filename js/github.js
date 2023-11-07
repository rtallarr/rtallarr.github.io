const apiLanguages = 'https://github-readme-stats.vercel.app/api/top-langs/?username=rtallarr&size_weight=0.5&count_weight=0.5'

async function getLanguages() {
    const response = await fetch(apiLanguages);
    return response.text();
}

getLanguages().then(data => 
    console.log(data)
)