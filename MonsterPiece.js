
class MonsterPiece extends PlaceablePiece {
    constructor(){
    }

    getMovableTiles(numMoveCrests){
        //want to do recusive here. 
        movableTiles = new Set();
        checkedTiles = new Set();
        
        function getMovableTilesHelper(numMoveCrests, movableTiles, checkedTiles){ //TODO: optimize?
            currentTile = getTile(this.row, this.column);

            //returns movableTiles if no more move crests ...
            if(numMoveCrests == 0){
                return movableTiles;
            }

            adjacentTiles = currentTile.getAdjacentTiles();
            adjacentTiles.forEach(element => { //using recurive and iterative - is that ok?
                if (checkedTiles.includes(element)){
                    continue;
                }
                else {
                    checkedTiles.push(element);
                }
                if (element.isMovableTo()){
                    movableTiles.add(currentTile);
                    return getMovableTilesHelper(numMoveCrests-1, movableTiles, checkedTiles);
                }
            });

            // ... or if no unchecked tiles available to move to.
            return movableTiles;
        }

        return getMovableTilesHelper(numMoveCrests, movableTiles);
    }

}