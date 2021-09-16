class Tile {
    isPath;
    isOccupied;
    occupyingPiece;
    northTile;
    southTile;
    westTile;
    eastTile;
    //may need row, col to id itself in other external methods

    constructor(){
        this.isPath = false;
        this.isOccupied = false;
    }

    //TODO: enforce good args?
    getIsOccupied(boolean){ 
        return this.setIsOccupied;
    }

    getIsPath(boolean){ 
        return this.setIsPath;
    }

    getOccupyingPiece(piece){
        return this.occupyingPiece;
    }

    setIsOccupied(boolean){ 
        this.setIsOccupied = boolean;
    }

    setIsPath(boolean){ 
        this.setIsPath = boolean;
    }

    setOccupyingPiece(piece){
        this.occupyingPiece = piece;
    }

    setAdjacentTile(tile, direction){
        switch(direction){
            case "north":
                this.northTile = tile;
                break;
            case "south":
                this.southTile = tile;
                break;
            case "east":
                this.eastTile = tile;
                break;
            case "west":
                this.westTile = tile;
                break;
            default:
                //TODO
        }
    }

    getAdjacentTiles(){
        return [this.northTile, this.southTile, this.eastTile, this.westTile];
    }

    isMovableTo(){
        return this.isPath && !this.isOccupied;
    }
    
}