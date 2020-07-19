const followers = document.getElementById('followers');

async function getFollowers(profileId) {
    const url      = `https://instagram.com/${profileId}/?__a=1`;
    const response = await fetch(url);
    const data     = await response.json();

    return data.graphql.user.edge_followed_by.count;
}

async function setFollowers(profileId) {
    followers.textContent = await getFollowers(profileId);
}

setInterval(() => setFollowers(''), 1000);
