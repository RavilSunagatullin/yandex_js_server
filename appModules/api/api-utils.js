async function getData(url) {
	try {
		const response = await fetch(url)
		return await response.json()
	} catch (e) {
			throw new Error(e)
	}
}
module.exports = {getData}