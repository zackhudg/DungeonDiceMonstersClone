class Board {
    rows;
    columns;
    tiles;
    constructor(rows, columns){
        this.rows = rows;
        this.columns = columns;
        this.tiles = [];
        for(let i = 0; i < rows; i++){
            this.tiles.push([]);
            for(let j = 0; j < columns; j++){
                this.tiles[i].push(new Tile());
            }
        }
    }
    getTiles(){
        return this.tiles;
    }

    getTile(row, column){
        return this.tiles[row][column];
    }
}