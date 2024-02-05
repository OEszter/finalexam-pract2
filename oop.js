class Game {
    constructor(name, playtime, hasFinished) {
    this.name = name
    this.playtime = playtime
    this.hasFinished = hasFinished
    
}

    getTotal() {
        if (this.hasFinished) return this.playtime
        else return "unfinished"
    }
}

const game1 = new Game("World of Warcraft", 1000, false)
const game2 = new Game("Jazz Jackrabbit", 5, true)
const game3 = new Game("Super Mario", 120, true)

console.log(game1.getTotal())
console.log(game2.getTotal())
console.log(game3.getTotal())

class GameStatistics {
    static getTotalHoursWasted(games) {
        games.map(game => {
            if (game.hasFinished)
        })
    }


}