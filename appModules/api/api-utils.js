async function getData(url) {
	try {
		const response = await fetch(url)
		return await response.json()
	} catch (e) {
			throw new Error(e)
	}
}
function getRandomGame(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}
module.exports = {getData, getRandomGame}