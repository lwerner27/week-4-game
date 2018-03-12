$(document).ready(function() {

    //change this 2 after player one choses, switch to 3 after choosing first opponent then change back to 2 after a defeat
    let whichPlayer = 1 
    // Counts how many Pokemon have been defeated
    let defeatedPokemon = 0
    // Holds the boolean for if the player wants to play again
    let playAgain;
    // Designates the player pokemon
    let playerPokemon;
    // Designates the computer pokemon
    let computerPokemon;
    // Targets the instructions box
    let instructions = $('#instructions')
    // Targets all the pokemond divs
    let pokemonDiv = $('.pokemon-div')
    // Targets Pikachu's div
    let pikachuDiv = $('#Pikachu')
    // Holds the orignal Pikachu div config for reset
    let originalPikachuDiv = '<div class="col m3 center-align pokemon-div" id="Pikachu"><h5>Pikachu</h5><img src="./assets/images/Pikachu.png" alt="" class="pokemon"><h5>Health</h5><p id="pikachu-health">200</p></div>'
    // Targets Charizards div
    let charizardDiv = $('#Charizard')
    // Holds the original Charizard div config for reset
    let originalCharizardDiv = '<div class="col m3 center-align pokemon-div" id="Charizard"><h5>Charizard</h5><img src="./assets/images/Charizard.png" alt="" class="pokemon"><h5>Health</h5><p id="charizard-health">200</p></div>'
    // Targets Blastoise div
    let blastoiseDiv = $('#Blastoise')
    // Holds the original Blastoise div config for reset
    let originalBlastoiseDiv = '<div class="col m3 center-align pokemon-div" id="Blastoise"><h5>Blastoise</h5><img src="./assets/images/Blastoise.png" alt="" class="pokemon"><h5>Health</h5><p id="blastoise-health">200</p></div>'
    // Targets Venusaur div
    let venusaurDiv = $('#Venusaur')
    // Holds the original Venusaur div config for reset
    let originalVenusaurDiv = '<div class="col m3 center-align pokemon-div" id="Venusaur"><h5>Venusaur</h5><img src="./assets/images/Venusaur.png" alt="" class="pokemon"><h5>Health</h5><p id="venusaur-health">200</p></div>'
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
        attackIncrease: 2,
        counterAttack: 50,
        healthElement: $('#pikachu-health'),
        type: 'Electric',
        weakness:'Ground',
        resistance: 'Flying'
    }
    // Charizard Object
    let charizard = {
        name: "Charizard",
        originalHealth: 200,
        health: 200,
        originalAttack: 50,
        attack: 50,
        attackIncrease: 1.75,
        counterAttack: 75,
        healthElement: $('#charizard-health'), 
        type: 'Fire',
        weakness: 'Water',
        resistance: 'Grass'
    }
    // Blastoise Object
    let blastoise = {
        name: "Blastoise",
        originalHealth: 200,
        health: 200,
        originalAttack: 50,
        attack: 60,
        attackIncrease: 1.75,
        counterAttack: 50,
        healthElement: $('#blastoise-health'),
        type: 'Water',
        weakness: 'Grass',
        resistance: 'Fire'

    }
    // Venusaur Object
    let venusaur = {
        name: "Venusaur",
        originalHealth: 200,
        health: 200,
        originalAttack: 50,
        attack: 50,
        attackIncrease: 1.5,
        counterAttack: 25,
        healthElement: $('#venusaur-health'),
        type: 'Grass',
        weakness: 'Fire',
        resistance: 'Water'
    }

    // Function Declarations

    // Chooses the pokemon for you and your opponent
    function choosePokemon (arg1) {
        if (whichPlayer === 1) {
            if (arg1 === 'Pikachu') {
                playerPokemon = pikachu
                pikachuDiv.removeClass('m3')
                pikachuDiv.addClass('m12')
                yourPokemonDiv.append(pikachuDiv);
                instructions.text('Choose Oppenents Pokemon')
                whichPlayer = 2
            } else if (arg1 === 'Charizard') {
                playerPokemon = charizard
                charizardDiv.removeClass('m3')
                charizardDiv.addClass('m12')
                yourPokemonDiv.append(charizardDiv)
                instructions.text('Choose Oppenents Pokemon')
                whichPlayer = 2
            } else if (arg1 === 'Blastoise') {
                playerPokemon = blastoise
                blastoiseDiv.removeClass('m3')
                blastoiseDiv.addClass('m12')
                yourPokemonDiv.append(blastoiseDiv)
                instructions.text('Choose Oppenents Pokemon')
                whichPlayer = 2
            } else if (arg1 === 'Venusaur') {
                playerPokemon = venusaur
                venusaurDiv.removeClass('m3')
                venusaurDiv.addClass('m12')
                yourPokemonDiv.append(venusaurDiv)
                instructions.text('Choose Oppenents Pokemon')
                whichPlayer = 2
            }
        } else if (whichPlayer === 2) {
            if (arg1 === 'Pikachu') {
                computerPokemon = pikachu
                pikachuDiv.removeClass('m3')
                pikachuDiv.addClass('m12')
                opposingPokemonDiv.append(pikachuDiv);
                instructions.text('Battle!')
                whichPlayer = 3
            } else if (arg1 === 'Charizard') {
                computerPokemon = charizard
                charizardDiv.removeClass('m3')
                charizardDiv.addClass('m12')
                opposingPokemonDiv.append(charizardDiv)
                instructions.text('Battle!')
                whichPlayer = 3
            } else if (arg1 === 'Blastoise') {
                computerPokemon = blastoise
                blastoiseDiv.removeClass('m3')
                blastoiseDiv.addClass('m12')
                opposingPokemonDiv.append(blastoiseDiv)
                instructions.text('Battle!')
                whichPlayer = 3
            } else if (arg1 === 'Venusaur') {
                computerPokemon = venusaur
                venusaurDiv.removeClass('m3')
                venusaurDiv.addClass('m12')
                opposingPokemonDiv.append(venusaurDiv)
                instructions.text('Battle!')
                whichPlayer = 3
            }
        }
    }

    // Does the battle calculations
    function doBattle() {

        // checks if the opposing pokemon is weak or resistant to your pokemon
        if (playerPokemon.type === computerPokemon.weakness) {
            computerPokemon.health = computerPokemon.health - (playerPokemon.attack * 2)
        } else if (playerPokemon.type === computerPokemon.resistance) {
            computerPokemon.health = computerPokemon.health - (playerPokemon.attack / 2)
        } else {
            computerPokemon.health = computerPokemon.health - playerPokemon.attack
        }

        // Checks if the opposing pokemon has been defeated
        if (computerPokemon.health > 0) {
            playerPokemon.health = playerPokemon.health - computerPokemon.counterAttack
            playerPokemon.healthElement.html(playerPokemon.health)
            computerPokemon.healthElement.html(computerPokemon.health)
        } else if (computerPokemon.health <= 0) {
            playerPokemon.attack = playerPokemon.attack * playerPokemon.attackIncrease;
            opposingPokemonDiv.empty();
            whichPlayer = 2
            defeatedPokemon++;
            computerPokemon = null;
            instructions.text('Choose Another Opponent')
            // console.log(defeatedPokemon)
        }

        // This Checks to see if the player lost after the battle
        if (playerPokemon.health <=0) {
            whichPlayer = 3
            yourPokemonDiv.empty()
            opposingPokemonDiv.empty()
            instructions.text('You Lose!')
        }
        

    }

    // Checks to see if you have defeated all the pokemon
    function winCheck() {
        if (defeatedPokemon === 3) {

            instructions.text("You Win!")

            $('#pokemon-row').append('<div class="col m6 center-align option-button" id="yes"><a class="waves-effect waves-light btn-large green">Yes</a></div>')
            $('#pokemon-row').append('<div class="col m6 center-align option-button" id="no"><a class="waves-effect waves-light btn-large red">No</a></div>')
        }
    }


    // Resets the game and stats 
    function resetGame () {
        
        defeatedPokemon = 0
        whichPlayer = 1
        pikachu.health = pikachu.originalHealth
        pikachu.attack = pikachu.originalAttack
        charizard.attack = charizard.originalAttack
        charizard.health = charizard.originalHealth
        blastoise.attack = blastoise.originalAttack
        blastoise.health = blastoise.originalHealth
        venusaur.attack = venusaur.originalAttack
        venusaur.health = venusaur.originalHealth

        $('#pokemon-row').empty()
        yourPokemonDiv.empty()
        opposingPokemonDiv.empty()
        instructions.text('Choose Your Pokemon')

        pikachuDiv.html(originalPikachuDiv)
        charizardDiv.html(originalCharizardDiv)
        blastoiseDiv.html(originalBlastoiseDiv)
        venusaurDiv.html(originalVenusaurDiv)

        $('#pokemon-row').append(pikachuDiv)
        $('#pokemon-row').append(charizardDiv)
        $('#pokemon-row').append(blastoiseDiv)
        $('#pokemon-row').append(venusaurDiv)

        console.log(whichPlayer)

    }

    // On click functions
    $('#pokemon-row').on('click', '.pokemon-div', function(event) {
        console.log(this.id)
        let clickedPokemon = this.id
        choosePokemon(clickedPokemon)
    })

    attackButton.on('click', function () {
        doBattle()
        winCheck();
    })

    $('#pokemon-row').on('click', '.option-button', function(event) {
        let playAgain = this.id

        if (playAgain === 'yes') {

            resetGame()
    
        }
    })

    $('body').click(function (event) {
        console.log(whichPlayer)
    })



});

