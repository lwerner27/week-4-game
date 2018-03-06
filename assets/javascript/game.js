$(document).ready(function() {

    //change this 2 after player one choses, switch to 3 after choosing first opponent then change back to 2 after a defeat
    let whichPlayer = 1 
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
    let yourPokemon = $('#your-pokemon')
    // Targets the opposing-pokemon div
    let opposingPokemon = $('#opposing-pokemon')

    // Function Declarations
    function choosePokemon (arg1) {
        if (whichPlayer === 1) {
            if (arg1 === 'Pikachu') {
                pikachuDiv.removeClass('m4')
                pikachuDiv.addClass('m12')
                yourPokemon.append(pikachuDiv);
                whichPlayer = 2
            } else if (arg1 === 'Charizard') {
                charizardDiv.removeClass('m4')
                charizardDiv.addClass('m12')
                yourPokemon.append(charizardDiv)
                whichPlayer = 2
            } else if (arg1 === 'Blastoise') {
                blastoiseDiv.removeClass('m4')
                blastoiseDiv.addClass('m12')
                yourPokemon.append(blastoiseDiv)
                whichPlayer = 2
            } else if (arg1 === 'Venusaur') {
                venusaurDiv.removeClass('m4')
                venusaurDiv.addClass('m12')
                yourPokemon.append(venusaurDiv)
                whichPlayer = 2
            }
        } else if (whichPlayer === 2) {
            if (arg1 === 'Pikachu') {
                pikachuDiv.removeClass('m4')
                pikachuDiv.addClass('m12')
                opposingPokemon.append(pikachuDiv);
                whichPlayer = 3
            } else if (arg1 === 'Charizard') {
                charizardDiv.removeClass('m4')
                charizardDiv.addClass('m12')
                opposingPokemon.append(charizardDiv)
                whichPlayer = 3
            } else if (arg1 === 'Blastoise') {
                blastoiseDiv.removeClass('m4')
                blastoiseDiv.addClass('m12')
                opposingPokemon.append(blastoiseDiv)
                whichPlayer = 3
            } else if (arg1 === 'Venusaur') {
                venusaurDiv.removeClass('m4')
                venusaurDiv.addClass('m12')
                opposingPokemon.append(venusaurDiv)
                whichPlayer = 3
            }
        }
    }

    // On click function
    pokemonDiv.on('click', function(event) {
        let clickedPokemon = this.id
        choosePokemon(clickedPokemon)
    })

});

