window.onload = function(){

    const canvas = document.querySelector('canvas')
    canvasContext = canvas.getContext('2d');
    console.log(canvasContext);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawCity();
}

function drawCity(){
    //building one 
    drawBuildingOne()
    drawBuildingTwo()
    drawBuildingThree()
    // four merged with third building
    drawBuildingFour()
    drawBuildingFive()
    drawBuildingSix()
    drawBuildingSeven()
    
    drawFootPath()
    drawRoad()
}

function drawBuildingOne(){
    //building structure
    createRectangle(0, 300, 130, 300, '#000')

    //windows
    var floorHeightFromTerrace = 320;
    var noOfFloors = 5;
    var windowPosInc = 40;

    for (var i = 0; i < noOfFloors; i++) {
        drawWindows(10, floorHeightFromTerrace, 25, 20, 'white', 30, 3, windowPosInc);
        floorHeightFromTerrace += 40
    }
    
    // door
    createRectangle(35, 550, 50, 50, 'white')
}

function drawBuildingTwo() {
    //building structure
    createRectangle(140, 200, 265, 400, '#000')
    //windows
    var floorHeightFromTerrace = 220;
    var noOfFloors = 8;
    var windowPosInc = 40;

    for (var i = 0; i < noOfFloors; i++) {
        drawWindows(160, floorHeightFromTerrace, 25, 20, 'white', 30, 6, windowPosInc);
        floorHeightFromTerrace += 40
    }

    // lights turned on
    drawWindows(160, 450, 25, 30, 'orange', 30, 6, windowPosInc)
    // door
    createRectangle(165, 550, 50, 50, 'white')
}

function drawBuildingThree() {
    //building structure
    createRectangle(410, 400, 100, 200, '#000')
    //windows
    var floorHeightFromTerrace = 420;
    var noOfFloors = 4;
    var windowPosInc = 45;    

    for (var i = 0; i < noOfFloors; i++) {
        drawWindows(420, floorHeightFromTerrace, 35, 30, 'white', 35, 2, windowPosInc);
        floorHeightFromTerrace += 40
    }

    // // door
    // createRectangle(435, 550, 50, 70, 'white')
}

function drawBuildingFour() {
    //building structure
    createRectangle(510, 400, 90, 200, '#000')

    //windows
    var floorHeightFromTerrace = 420;
    var noOfFloors = 3;
    var windowPosInc = 45;

    for (var i = 0; i < noOfFloors; i++) {
        drawWindows(510, floorHeightFromTerrace, 75, 30, 'white', 35, 1, windowPosInc);
        floorHeightFromTerrace += 40
    }


    // door
    createRectangle(515, 550, 50, 50, 'white')
    createRectangle(545, 550, 40, 50, 'lightgrey')    
}

function drawBuildingFive() {
    //building structure
    createRectangle(610, 300, 305, 300, '#000')

    //windows
    var floorHeightFromTerrace = 320;
    var noOfFloors = 6;
    var windowPosInc = 40;

    for (var i = 0; i < noOfFloors; i++) {
        drawWindows(630, floorHeightFromTerrace, 25, 20, 'white', 33, 7, windowPosInc);
        floorHeightFromTerrace += 40
    }

    // door
    createRectangle(675, 550, 70, 50, 'white')
    createRectangle(705, 550, 70, 50, 'lightgrey')
}

function drawBuildingSix() {
    //building structure
    createRectangle(920, 50, 210, 550, '#000')

    //windows
    var floorHeightFromTerrace = 70;
    var noOfFloors = 12;
    var windowPosInc = 40;

    for (var i = 0; i < noOfFloors; i++) {
        drawWindows(950, floorHeightFromTerrace, 25, 20, 'white', 33, 4, windowPosInc);
        floorHeightFromTerrace += 40
    }

    // door
    createRectangle(975, 550, 70, 50, 'white')
    createRectangle(1005, 550, 70, 50, 'lightgrey')
}

function drawBuildingSeven() {
    //building structure
    createRectangle(1135, 150, 145, 450, '#000')

    //windows
    var floorHeightFromTerrace = 160;
    var noOfFloors = 10;
    var windowPosInc = 40;

    for (var i = 0; i < noOfFloors; i++) {
        drawWindows(1155, floorHeightFromTerrace, 25, 20, 'white', 33, 3, windowPosInc);
        floorHeightFromTerrace += 40
    }

    // door
    createRectangle(1155, 550, 70, 50, 'white')
    createRectangle(1185, 550, 70, 50, 'lightgrey')
}

function drawFootPath(){
    // footpath
    canvasContext.fillStyle = 'lightgrey';
    canvasContext.fillRect(0, 650, window.innerWidth, 4);

    var left = 40;
    for (var i = 0; i <= 12; i++) {
        canvasContext.fillRect(left, 600, 10, 50);
        left += 100;
    }

    canvasContext.fillStyle = '#5C5C5C';
    canvasContext.fillRect(0, 600, 40, 50);

    var cementblock = 50
    for (var i = 0; i <= 12; i++) {
        canvasContext.fillStyle = '#5C5C5C';
        canvasContext.fillRect(cementblock, 600, 90, 50);
        cementblock += 100;
    }
}

function drawRoad(){
    // yello line
    canvasContext.fillStyle = 'orange';
    canvasContext.fillRect(0, 655, window.innerWidth, 15);
    canvasContext.fillRect(0, window.innerHeight - 20, window.innerWidth, 15);

    // road
    canvasContext.fillStyle = '#000';
    lineheight = 673
    for (var i = 0; i < 13; i++) {
        canvasContext.fillRect(0, lineheight, window.innerWidth, 15);
        lineheight += 15;
    }

    drawWindows(0,760,70,10,"white",10,10,150)
}

function drawWindows(leftX, topY, width, height, fillColor, incrementby, noOfWindows, windowPosInc) {
    for(var i=0 ; i < noOfWindows ; i++){
        createRectangle(leftX, topY, width, height, fillColor);
        leftX += windowPosInc;
    }
}

function createRectangle(leftX, topY, width, height, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(leftX, topY, width, height);
}
