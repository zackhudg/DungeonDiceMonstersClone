class PlaceablePiece extends BoardPiece{


    //can just use the .this values? no need to send args?
    place0(row, column, board, rotation){ //cross layout
        let relativeTilePlacementCoordinates = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
            [2, 0]
        ]

        function multiplyMatrices(matrix1, matrix2){ //assumes M1 = ixj array, M2 = jxk array. TODO: bad parameter handling?
            let productMatrix = [];
            for(let i = 0; i < matrix1.length; i++){
                let newMatrixRow = [];
                for(let k = 0; k < matrix2[0].length; k++){
                    let product = 0;
                    for (let j = 0; j < matrix2.length; j++){
                        product += matrix1[i][j] * matrix2[j][k];   
                    }
                    newMatrixRow.push(product);
                }
                productMatrix.push(newMatrixRow);
            }
            return productMatrix;
        }
        
        function rotate(tilesToPlace, rotation){
            let rotationMatrix = [
                [1,0],
                [0,1]
            ];
            if(rotation == 1){//rotate 90deg clockwise. Could change 1 to 90 ?
                rotationMatrix = [
                    [0,1],
                    [-1,0]
                ]
            }else if(rotation == 2){//rotate 180deg clockwise
                rotationMatrix = [
                    [-1,0],
                    [0,-1]
                ]
            }else if(rotation == 3){ //rotate 270 deg clockwise
                rotationMatrix = [
                    [0,-1],
                    [1,0]
                ]
            }

            return multiplyMatrices(relativeTilePlacementCoordinates, rotationMatrix); //still multing with identity matrix. TODO:optimize
        }

        newRelativeTilePlacementCoordinates = rotate(tilesToPlace, rotation);

        tilesToPlace.forEach( element => {
            let tileRow = row + element[0];
            let tileColumn = row + element[1];
            if(board.getTile(tileRow, tileColumn).getIsPath()){
                return false;
            }
            board.setTileIsPath(tileRow, tileColumn);
        })

        return true;
        
    }

    placePiece(row, column, board, pieceLayoutId){
        switch(pieceLayoutId){
            case 0:
                //Place tiles
                
                break;
            case 1:

                break;
            //...

            default:
                //TODO
        }
    }
    
    summon(row, column, board, pieceLayoutId){
        super(row,column,board,pieceLayoutId);
        placePiece(row, column, board, pieceLayoutId);
    }
}