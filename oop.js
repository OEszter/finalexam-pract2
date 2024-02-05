class Game {
	constructor (name, playtime, hasFinishined) {
		this.name = name
		this.playtime = playtime
		this.hasFinishined = hasFinishined
	}

	getTotal() {
		if (this.hasFinishined) return this.playtime
		else return 0
	}
}

const game1 = new Game("World of Warcarft", 1000, false)
const game2 = new Game("Jazz Jackrabbit", 5, true)
const game3 = new Game("Super Mario", 120, true)

console.log(game1.getTotal())
console.log(game2.getTotal())
console.log(game3.getTotal())

//console.log(Game.getTotal())

class GameStatistics {
	static getTotalHoursWasted(games /* array of Game instances */) {
		let result = 0

		games.forEach(game => result += game.getTotal())

		return result
	}
}

console.log(GameStatistics.getTotalHoursWasted([game1, game2, game3]))

/* const stats1 = new GameStatistics()
console.log(stats1.getTotalHoursWasted()) */