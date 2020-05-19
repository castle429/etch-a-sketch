let innerDiv;
let container = document.getElementById("container");
let resetButton = document.getElementById("reset");
let colorScheme = "";
let blackOpacity = 0.02;


function createGrid(numBlocks) {
    if(numBlocks > 64 || numBlocks < 1) {
        alert("Please enter a number from 1 to 64");
        createGrid(16);
    }
    else {
        for(let i = 0; i < numBlocks ** 2; i++) {
            innerDiv = document.createElement('div');
            innerDiv.style.width = container.offsetWidth / numBlocks + "px";
            innerDiv.style.height =  container.offsetHeight / numBlocks + "px";
            innerDiv.setAttribute("id", "inner-div");
            innerDiv.addEventListener("mouseover", function(e) {
                if(colorScheme == "Random Colors") {
                    e.target.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
                }
                else if(colorScheme == "Black Shade") {
                    e.target.style.background = "black";
                    e.target.style.opacity = blackOpacity;
                    blackOpacity += 0.02;
                }
                else {
                    e.target.style.background = "black";
                }

            });

            container.appendChild(innerDiv);

        }
    }
}

function getSizeInput() {
    let newDimensions = prompt("Enter the number of blocks you would like the canvas to have on each side (e.g. Type 4 for a 4x4 canvas):");
    if(Number.isInteger(Number.parseInt(newDimensions))) {
        return newDimensions;
    }
    else {
        alert("Must enter an integer");
        return 16;
    }

}

function setInputSize(element) {
    if(event.key == 'Enter') {
        blackOpacity = 0.02;
        container.textContent = '';
        if(Number.parseInt(element.value)) {
            createGrid(element.value);
        }
        else {
            alert("Must enter a number");
            createGrid(16);
        }
        element.value = '';
    }
}

function changeColorScheme() {
    let schemeOption = document.getElementById("color-options").value;
    colorScheme = schemeOption;
    blackOpacity = 0.02;

}


resetButton.addEventListener("click", function() {
    container.textContent = '';
    blackOpacity = 0.02;
    createGrid(16);
});

document.getElementById("color-options").value = "--Color Scheme--";
createGrid(16);


