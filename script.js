var board;
var blockSize = 25;
var rows = 20;
var cols = 20;
var context;

//Drawing snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

//Drawing food;
var foodX;
var foodY;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used to draw on a board

    placeFood();
    update();
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    //head color
    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    //food color
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}

function placeFood() {
    //random = 0-1 => (0-1)*cols = (0-19.9999) => floor => 0-19 * 25 

    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}