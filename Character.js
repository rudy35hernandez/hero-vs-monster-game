import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js'
/*
Challenge
1. In the getDiceHtml method, map over currentDiceScore 
to return this string of html template for each element:
<div class="dice">${num}</div>`. Save this new array
to diceArray.
2. Modify the attack() function in index.js to get our 
app working again.
*/


function Character(data) {
    Object.assign(this, data)
    
    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.maxHealth = this.health

    this.getHealthBarHtml = () => {
        const percent = getPercentage(this.health, this.maxHealth)
        
            return `
                <div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                    style="width: ${percent}%;">
                    </div>
                </div>
                `
    }
    
    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
    } 
    

    this.takeDamage = function(attackScoreArray){
        let totalAttackScore = attackScoreArray.reduce((num, acc) => num + acc,0)
        this.health -= totalAttackScore
        
        if(this.health <= 0){
            this.dead = true
            this.health = 0
        }

    }

    this.getCharacterHtml = () => {
        const { elementId, name, avatar, health, diceCount } = this;   
        
        const healthBar = this.getHealthBarHtml()
        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }  
}

export default Character