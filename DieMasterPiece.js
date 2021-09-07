class DieMasterPiece extends BoardPiece {
    constructor(team, board){
        this.name = "Die Master";
        this.type = "none"; //enums?
        this.hp = 3;
        this.abilityText = "The owner of this Die Master loses the game if this piece dies.";
        this.column = 6;
        this.board = board;

        this.row = 0;
        if (team == 0){
            this.row = 16;
        }

        this.summon(this.row, this.column, board);
        
    }
    
}