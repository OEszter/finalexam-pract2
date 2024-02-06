//A clason belül kicsit más a scope. Minden átjárható a classon belól. :-)

class Game {
	constructor (name, playtime, hasFinishined) {
		this.name = name
		this.playtime = playtime
		this.hasFinishined = hasFinishined
	}

//a classon belül nem kell function	 szó, hogy létrehozzuk a metódust
	getTotal() {
		if (this.hasFinishined) return this.playtime
		else return 0
	}
}

const game1 = new Game("World of Warcarft", 1000, false)
const game2 = new Game("Jazz Jackrabbit", 5, true)
const game3 = new Game("Super Mario", 120, true)

console.log(game1.getTotal()) //Ezzel kiíratom az egyes példányon élő metódus értékét
console.log(game2.getTotal())
console.log(game3.getTotal())

//console.log(Game.getTotal())    ----EZT NEM ÉRTELMEZI


//MIVEL NINCSEN BENNE constructor, EBBŐL LÁTSZIK, HOGY A BENNE LÉVŐ METÓDUS A classon FOG ÉLNI. 
//EHHEZ KELL A static SZÓ IS. 
//+ paramétert VESZI ÁT A METÓDUS. 

class GameStatistics {
	static getTotalHoursWasted(games) {  //Itt a games egy array lesz, amelyben game példányokat fogunk átadni
		let result = 0

		games.forEach(game => result += game.getTotal())
		//Itt a forEach-csel kivesszük minden game-ből a getTotal értéket, majd hozzáadjuk a result értékéhez, amit eredetileg nullával definiáltam

		return result
	}
}


//------------------- A getTotalHoursWasted LEFUTTATÁSA ------
console.log(GameStatistics.getTotalHoursWasted([game1, game2, game3]))

/* 
ILYEN NEM LÉTEZIK, NEM MŰKÖDIK:
const stats1 = new GameStatistics()
console.log(stats1.getTotalHoursWasted()) */