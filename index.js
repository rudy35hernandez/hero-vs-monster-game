import characterData from "./data.js";
import Character from "./Character.js";

document.getElementById("attack-button").addEventListener("click", attack)

let monstersArray = ["orc", "demon", "goblin"];


function getNewMonster(arr){
    const nextMonsterData = characterData[arr.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack(){
    wizard.getDiceHtml()
    monster.getDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()

    if(wizard.dead || monster.dead){
        endGame()
    }
}

function endGame(){
    const endEmoji = wizard.health === 0 && monster.health === 0 ?
        "☠️" :
        wizard.health > 0 ? "🔮" :
        "☠️"
        
    const endMessage = wizard.health === 0 && monster.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
        `The monster is Victorious`
        
    let endGameHtml = `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
    
    document.body.innerHTML = endGameHtml
}

function render(){
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster(monstersArray)

render()