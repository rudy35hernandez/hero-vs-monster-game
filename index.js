import characterData from "./data.js";
import Character from "./Character.js";



document.getElementById("attack-button").addEventListener("click", attack)

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
    const endMessage = orc.dead && !wizard.dead ? "The wizard wins" :
                       wizard.dead && !orc.dead ? "The orc wins" : 
                       "no victors"
    
    console.log(endMessage)
}

function render(){
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

render()