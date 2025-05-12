let numSquares;

//get elements for DOM manipulation
const container_div = document.querySelector("div.container");
const heading_div = document.querySelector("div.heading");
const reset_button = document.querySelector("button");


reset_button.addEventListener("click",() => {
    numSquares =  prompt("How many squares in the grid per side?",16);
    
    //for input other than a number use default value
    if (isNaN(Number(numSquares))) numSquares = 16;
     
    //for too large numbers use max value of 100
    if (+numSquares > 100 ) numSquares = 100;

    //for negative values use default value
    if ((+numSquares <= 0)) {
        numSquares = 16
    }

    container_div.innerText = '';
    drawGrid(numSquares)
});


function drawGrid(numSquares) {
    const screen_width = 960;
    
    const sqr_width = screen_width / numSquares;
    const sqr_height = sqr_width;

    heading_div.innerText = `Drawing a ${numSquares} x ${numSquares} grid`;

    for(let i=0; i < numSquares; i++) {
        for(let j = 0; j < numSquares; j++) {
            const container_div = document.querySelector("div.container"); 
            const div_name   = document.createElement("div");
            div_name.className = "square";
            div_name.style.cssText += `height: ${sqr_height}px; width: ${sqr_width}px`;
            div_name.id = "sqr_" + i + "_" + j;
            container_div.appendChild(div_name);
        }
        
    }
}

container_div.addEventListener("mouseover", (event) => { 
    let sqr = event.target.id;
    
    const hover_div = document.querySelector(`#${sqr}`)
    
    hover_div.style.cssText += "background-color : blue"; 
})

drawGrid(16)