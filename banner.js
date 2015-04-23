/*
EaselJS utils for create banner
*/
function randomPixel(brick_name){
	//brick_name+"_"+ Math.floor(Math.random()*4) +"_"+ Math.floor(Math.random()*4)
	var pixel = stage.getChildByName( brick_name+"_"+ (Math.floor(Math.random()*3)) +"_"+ (Math.floor(Math.random()*3)) );
	pixel.homeX = pixel.x; 
	pixel.vX = (Math.floor(Math.random()*5)); pixel.vY = (Math.floor(Math.random()*5));
	
	return pixel;
}	
		
function createPixel(x,y,name,color){
	var pixel = new createjs.Shape();
	pixel.graphics.beginStroke(color).beginFill(color).drawRect(0,0,5,5);
	pixel.x = x; pixel.y = y; pixel.name = name;
	return pixel;
}
		
function createPixelBrick(w,h,brick_name,color){
	var i,j;
	var pixelMatrix = new Array(w);
	
	for(i=0;i < w;i++) pixelMatrix[i] = new Array(h);
	
	for(i=0;i < w;i++){
		for(j=0;j < h;j++){
				pixelMatrix[i][j] = createPixel(i*5,j*5,brick_name+"_"+i+"_"+j,color);
		}
	}
	return pixelMatrix;

}
function drawPixel(pixel){
	stage.addChild(pixel);
}
function drawBrick(x,y,pixelMatrix){
	var i=0,j=0;
	var x_ = x, y_ = y;
	pixelMatrix.forEach(function(z){
		z.forEach(function(a){
			a.y += y; a.x += x;
			drawPixel(a);
		});
	});	
	
}
