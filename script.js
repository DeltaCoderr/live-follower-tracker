const followers = document.getElementById("followers");

async function getFollowers(profileId) {
	var url = `https://www.instagram.com/${profileId}`;
	fetch;
	const response = await fetch(url);
	if (response.ok) {
		const html = await response.text();
		const stats = JSON.parse(
			html
				.split('<script type="application/ld+json">')[1]
				.split("</script>")[0]
		);
		console.log(stats);
		const count =
			stats.mainEntityofPage.interactionStatistic.userInteractionCount;

		document.getElementsByClassName("loading")[0].style.display = "none";
		document.getElementsByClassName("user")[0].style.display = "block";
		document.getElementById("followers").innerText = count + " Followers";

		document.getElementsByClassName("profile")[0].innerText =
			stats.alternateName;
		document.getElementsByClassName("profile")[0].href = url;
		document.getElementsByClassName("name")[0].innerText =
			"Name: " + stats.name;
	} else {
		if (response.status === 404) {
			alert("User not found");
		} else {
			console.log(response);
			alert("Some error occured");
		}
	}
}

document.getElementById("usernameForm").addEventListener("submit", (e) => {
	e.preventDefault();
	const username = document.getElementById("username").value;
	document.getElementsByClassName("text")[0].style.display = "none";
	document.getElementsByClassName("loading")[0].style.display = "block";
	getFollowers(username);
});
