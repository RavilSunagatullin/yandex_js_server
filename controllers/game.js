const { config } = require('../appModules/rating')
const fs = require("fs").promises;
async function gameRouteController(res) {
	try{
		const ratingFile = await fs.readFile(config.PATH_TO_RATING_FILE)
		const data = JSON.parse(ratingFile)
		const game = data[0]
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(game));
	}catch (e){
		res.statusCode = 500;
		res.end("Internal Server Error");
		throw new Error(e)
	}
}
module.exports = gameRouteController;