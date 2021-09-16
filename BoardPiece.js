//abstract only in typescript
class BoardPiece {
    row;
    column;
    name;
    type;
    hp;
    abilityText;
    board;

    summon(row, column, board, pieceLayoutId){
        this.row = row;
        this.column = column;

        let tile = board.getTile(row, column); 
        tile.setIsPath(true);
        tile.setIsOccupied(true);
        tile.occupyingPiece = this;
    }

}