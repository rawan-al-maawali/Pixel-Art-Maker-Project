// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

const submit = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");
const colorPicker = document.getElementById("colorPicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
var heightValue = height.value;
var widthValue = width.value;
var colorValue;

//store the color the user selected
colorPicker.addEventListener("input", function(color) {         
    colorValue = colorPicker.value;
});

//store the height the user entered
height.addEventListener("input", function(heightNumber) {
    heightValue = height.value;
});

//store the width the user entered
width.addEventListener("input", function(widthNumber) {
    widthValue = width.value;
});

//submit form
submit.addEventListener("submit", makeGrid);

//make grid 
function makeGrid(event) {
    table.innerHTML = ""
    for(let r = 1; r<=heightValue; ++r ){
        const newRow = document.createElement("tr");  //create a new row
        table.appendChild(newRow);
        for(let d = 1; d<=widthValue; ++d ) {
            const newColumn = document.createElement("td"); //create a new column for every row
            newRow.appendChild(newColumn);
            newColumn.addEventListener("click", function() {    //color the cells     
                newColumn.style.backgroundColor = colorValue;
            });
        };
    };
    event.preventDefault(); //prevent the page from resetting 
};










