const container_div = document.querySelector("div.container");
let num = 16;

for(let i=0; i < num; i++) {
    for(let j = 0; j < num; j++) {
        const container_div = document.querySelector("div.container"); 
        const div_name   = document.createElement("div");
        div_name.className = "square";
        div_name.id = "sqr_" + i + "_" + j;
        container_div.appendChild(div_name);
    }
    
}


container_div.addEventListener("mouseover", (event) => { 
    let sqr = event.target.id;
    
    const hover_div = document.querySelector(`#${sqr}`)
    
    hover_div.style = "background-color : blue"; 
})

