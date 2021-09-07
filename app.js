//This is the first iteration. After realizing it was bad, I've moved into a more OO approach. Haven't removed/restructured this yet, but will eventually do that.

//TODO:replace all this crap
document.addEventListener('DOMContentLoaded', () => {
    
    const strategicView = document.querySelector('.strategic_view');
    const squares = [];

    const dice = {
        "blue-eyes_white_dragon":{
            "name":"Blue-Eyes White Dragon",
            "type":"dragon",
            "level":4,
            "hp":50,
            "attack":40,
            "defense":30,
            "ability_text":"Flying",
            "sides":[
                "SUM 4",
                "MOV 1",
                "MOV 2",
                "ATK 4",
                "DEF 1",
                "MAG 1"
            ],
            "movement":"flying"
        },
        "mystical_elf":{
            "name":"Mystical Elf",
            "type":"spellcaster",
            "level":1,
            "hp":20,
            "attack":10,
            "defense":20,
            "ability_text":"Restores 10HP to all allies upon summoning",
            "sides":[
                "SUM 1",
                "SUM 1",
                "SUM 1",
                "SUM 1",
                "MOV 2",
                "MAG 4"
            ]
        },
        "hitotsu-me_giant":{
            "name":"Hitotsu-Me Giant",
            "type":"beast",
            "level":2,
            "hp":10,
            "attack":20,
            "defense":10,
            "ability_text":"",
            "sides":[
                "SUM 2",
                "SUM 2",
                "SUM 2",
                "ATK 2",
                "DEF 2",
                "MAG 1"
            ]
        },
        "baby_dragon":{
            "name":"Baby Dragon",
            "type":"dragon",
            "level":1,
            "hp":10,
            "attack":10,
            "defense":10,
            "ability_text":"Flying. Immune to class-specific effects",
            "sides":[
                "SUM 1",
                "SUM 1",
                "SUM 1",
                "SUM 1",
                "ATK 1",
                "MAG 1"
            ],
            "movement":"flying"
        }
    };

    function createBoard(){
        for(let length = 0; length < 13; length++){
            for (let width = 0; width < 17; width++){
                const square = document.createElement('div');
                square.id = String.fromCharCode(length).concat(width);
                square.classList = 'square';
                strategicView.appendChild(square);
                squares.push(square);
            }
        }
    }

    createBoard();

    function initializeGame(){
        //TODO
    }

    function initializeDicePool(){
        let diceToRetrieve = ["blue-eyes_white_dragon", "mystical_elf", "mystical_elf", "mystical_elf", "hitotsu-me_giant", "baby_dragon"];
        const monsterSelectors = document.querySelectorAll('.monster_select');
        var dicePool = {}; 
        for(let i = 0; i < diceToRetrieve.length; i++){
            die = dice[diceToRetrieve[i]];
            dicePool[diceToRetrieve[i]] = die;
            for(let j = 0; j < monsterSelectors.length; j++){
                const option = document.createElement('option');
                option.class='monster';
                option.textContent = die.name;
                option.value=diceToRetrieve[i];
                monsterSelectors[j].appendChild(option);
            }
            
        }
        for(let i = 0; i < dicePool.length; i++){
            
        }
    }

    let toggleFilterButtons = document.querySelectorAll('.toggle_filter_button');
    for(let i = 0; i < toggleFilterButtons.length; i++){
        let currentButton = toggleFilterButtons[i];
        currentButton.addEventListener("click", function(){setFilterDisplay(currentButton.value)})
    }

    setFilterDisplay('monster_filter_select_1');
    setFilterDisplay('monster_filter_select_2');
    initializeDicePool();
    
})



function setFilterDisplay(button){
    let targetSelect = document.getElementById(button);
    let selects = document.getElementsByClassName(targetSelect.className.split(" ")[0]);
    selects[0].style.display = "none";
    selects[1].style.display = "none";
    targetSelect.style.display = "";
}
  

function filterFor(option1, option2){
    if(option1 == null && option2 == null){
        return null;
    }
    let crests=['ATK','DEF','MAG','TRA','MOV', null];
    let selectPool = dicePool;
    if (!crests.includes(option1) || !crests.includes(option2)){    //at least one is monster
        //add to rolling pool. Remove from selectPool. If not 3 dice, 
    }

    if (crests.includes(option1) ? !crests.includes(option2) : crests.includes(option2)){   //logical XOR
        
    }
    
}

//  monster summon = all same levels
//  monster and crest = all same levels, find crests
//  crests only = add up total crest numbers. At least one of each