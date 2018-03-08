$(document).ready(function() {

    //change this 2 after player one choses, switch to 3 after choosing first opponent then change back to 2 after a defeat
    let whichPlayer = 1 
    // Designates the player pokemon
    let playerPokemon;
    // Designates the computer pokemon
    let computerPokemon;
    // Targets all the pokemond divs
    let pokemonDiv = $('.pokemon-div')
    // Targets Pikachu's div
    let pikachuDiv = $('#Pikachu')
    // Targets Charizards div
    let charizardDiv = $('#Charizard')
    // Targets Blastoise div
    let blastoiseDiv = $('#Blastoise')
    // Targets Venusaur div
    let venusaurDiv = $('#Venusaur')
    // Targets the your-pokemon div
    let yourPokemonDiv = $('#your-pokemon')
    // Targets the opposing-pokemon div
    let opposingPokemonDiv = $('#opposing-pokemon')
    // Targets the attack-button
    let attackButton = $('#attack-button')
    // Pikachu Object
    let pikachu = {
        name: "Pikachu",
        originalHealth: 200,
        health: 200,
        originalAttack: 50,
        attack: 50,
        counterAttack: 75,
        healthElement: $('#pikachu-health')
    }
    // Charizard Object
    let charizard = {
        name: "Charizard",
        originalHealth: 200,
        health: 200,
        originalAttack: 50,
        attack: 50,
        counterAttack: 100,
        healthElement: $('#charizard-health')
    }
    // Blastoise Object
    let blastoise = {
        name: "Blastoise",
        originalHealth: 200,
        health: 200,
        originalAttack: 50,
        attack: 50,
        counterAttack: 50,
        healthElement: $('#blastoise-health')
    }
    // Venusaur Object
    let venusaur = {
        name: "Venusaur",
        originalHealth: 200,
        health: 200,
        originalAttack: 50,
        attack: 50,
        counterAttack: 25,
        healthElement: $('#venusaur-health')
    }

    // Function Declarations

    // Chooses the pokemon for you and your opponent
    function choosePokemon (arg1) {
        if (whichPlayer === 1) {
            if (arg1 === 'Pikachu') {
                playerPokemon = pikachu
                pikachuDiv.removeClass('m4')
                pikachuDiv.addClass('m12')
                yourPokemonDiv.append(pikachuDiv);
                console.log(playerPokemon)
                whichPlayer = 2
            } else if (arg1 === 'Charizard') {
                playerPokemon = charizard
                charizardDiv.removeClass('m4')
                charizardDiv.addClass('m12')
                yourPokemonDiv.append(charizardDiv)
                console.log(playerPokemon)
                whichPlayer = 2
            } else if (arg1 === 'Blastoise') {
                playerPokemon = blastoise
                blastoiseDiv.removeClass('m4')
                blastoiseDiv.addClass('m12')
                yourPokemonDiv.append(blastoiseDiv)
                console.log(playerPokemon)
                whichPlayer = 2
            } else if (arg1 === 'Venusaur') {
                playerPokemon = venusaur
                venusaurDiv.removeClass('m4')
                venusaurDiv.addClass('m12')
                yourPokemonDiv.append(venusaurDiv)
                console.log(playerPokemon)
                whichPlayer = 2
            }
        } else if (whichPlayer === 2) {
            if (arg1 === 'Pikachu') {
                computerPokemon = pikachu
                pikachuDiv.removeClass('m4')
                pikachuDiv.addClass('m12')
                opposingPokemonDiv.append(pikachuDiv);
                console.log(computerPokemon)
                whichPlayer = 3
            } else if (arg1 === 'Charizard') {
                computerPokemon = charizard
                charizardDiv.removeClass('m4')
                charizardDiv.addClass('m12')
                opposingPokemonDiv.append(charizardDiv)
                console.log(computerPokemon)
                whichPlayer = 3
            } else if (arg1 === 'Blastoise') {
                computerPokemon = blastoise
                blastoiseDiv.removeClass('m4')
                blastoiseDiv.addClass('m12')
                opposingPokemonDiv.append(blastoiseDiv)
                console.log(computerPokemon)
                whichPlayer = 3
            } else if (arg1 === 'Venusaur') {
                computerPokemon = venusaur
                venusaurDiv.removeClass('m4')
                venusaurDiv.addClass('m12')
                opposingPokemonDiv.append(venusaurDiv)
                console.log(computerPokemon)
                whichPlayer = 3
            }
        }
    }

    // Does the battle calculations
    function doBattle() {

        computerPokemon.health = computerPokemon.health - playerPokemon.attack
        
        if (computerPokemon.health > 0) {
            playerPokemon.health = playerPokemon.health - computerPokemon.counterAttack
            playerPokemon.healthElement.html(playerPokemon.health)
            computerPokemon.healthElement.html(computerPokemon.health)
        } else if (computerPokemon.health <= 0) {
            opposingPokemonDiv.empty();
            whichPlayer = 2
        }
        

    }

    // On click function
    pokemonDiv.on('click', function(event) {
        let clickedPokemon = this.id
        choosePokemon(clickedPokemon)
    })

    attackButton.on('click', function () {
        if (playerPokemon.health > 0) {
            doBattle()
        } else {
            yourPokemonDiv.empty()
            opposingPokemonDiv.empty()
        }
    })



});

