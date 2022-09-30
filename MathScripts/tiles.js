// tiles needed = tiling area / tile area
//Lenght x width = square feet of area
var length=8; 
var width=4;
var squareFeetArea= length*width;

var tileLength=1;
var tileWidth=1;
var tilingArea=tileLength*tileWidth;

var tilesNeeded= squareFeetArea/tilingArea;
var extraTilesNeeded= tilesNeeded*.10;
var tilesNeededFinal= tilesNeeded+extraTilesNeeded;
console.log("If the length of an area is "+length+" and the width of an area is "+width+". The square feet of the area is "+squareFeetArea+".")
console.log("If we need "+tilesNeededFinal+' tiles is all and there are 12 tiles in a box we need 3 boxes.')




