import {getDiceRollArray} from './utils.js'

function Character(data) {
    // this.elementId = data.elementId;
    // this.name = data.name;
    // this.avatar = data.avatar;
    // this.health = data.health;
    // this.diceCount = data.diceCount;
    Object.assign(this, data) /// Does the same thing the 5 lines above does

    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(num){ 
            return  `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function(){
        const {elementId, name, avatar, health, diceCount} = this;
        const diceHtml = this.getDiceHtml(diceCount)

        return `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">    
                    ${diceHtml}
                </div>
            </div>`;
    }

}



export default Character