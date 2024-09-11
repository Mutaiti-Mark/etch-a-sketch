const gridContainer = document.querySelector(".container")

const startBtn = document.querySelector(".startBtn")

const resetBtn = document.querySelector(".resetBtn")

function createDivs(divNum){
    totalDivCount = divNum*divNum

    containerDimension = 600 - (2 * divNum)

    gridDimension = (containerDimension/divNum).toString() + "px"

    for (let i=0; i<totalDivCount; i++){
        const gridDiv = document.createElement("div")
        gridDiv.classList.add("gridDivs")
        gridDiv.style.minHeight = gridDimension
        gridDiv.style.minWidth = gridDimension

        gridDiv.addEventListener('mouseover', () => {
            gridDiv.style.backgroundColor = "black"
        })
        gridContainer.append(gridDiv)
    }
}


function gridPrompt(){
    userNum = prompt("Enter a grid size (Number btwn 1-50)")

    if(gridContainer.hasChildNodes()){
        alert("Click on RESET to start-over")
    }else if(userNum < 51){
        createDivs(userNum)
    } else if(userNum > 50){
        alert("Please input a number less that 50")
    }
}

startBtn.addEventListener("click", gridPrompt)

resetBtn.addEventListener("click", () => {
    gridContainer.textContent = ""
})
