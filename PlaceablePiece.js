class PlaceablePiece extends BoardPiece{


    //can just use the .this values? no need to send args?
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