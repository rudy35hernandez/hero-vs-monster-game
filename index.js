import characterData from "./data.js";
import Character from "./Character.js";

document.getElementById("attack-button").addEventListener("click", attack)

let monstersArray = ["orc", "demon", "goblin"];


function getNewMonster(arr){
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData
}

function attack(){
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()

    if(wizard.dead || orc.dead){
        endGame()
    }
}

function endGame(){
    const endEmoji = wizard.health === 0 && orc.health === 0 ?
        "☠️" :
        wizard.health > 0 ? "🔮" :
        "☠️"
        
    const endMessage = wizard.health === 0 && orc.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
        "The Orc is Victorious"
        
    let endGameHtml = `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
    
    document.body.innerHTML = endGameHtml
}

function render(){
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

render()