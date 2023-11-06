// Create bars array
let barsArr = [];
function bars(numOfBars){
      for (let i = 0; i < numOfBars; i++) {;
            let barVal = Math.floor(Math.random() * 100) + 1;
            barsArr.push(barVal);
      }
}
bars(80)

// create a div for every array element
let container = document.querySelector('.visualizer-container');
function createBars(){
      let barsArrLength = barsArr.length;

      for (let i = 0; i < barsArrLength; i++){
            let barDiv = document.createElement('div')
            barDiv.classList.add('bar')
            barDiv.id = i
            barDiv.style.height = barsArr[i] * 4 + "px"
            barDiv.style.backgroundColor = "rgb(73, 176, 245)"
            container.appendChild(barDiv)
      }
}
createBars();

// create randomizng function for button
function randomizer(){
      container.innerHTML = '';
      barsArr = [];
      bars(80);
      createBars();
}
document.getElementById('randomizer-btn').addEventListener('click', randomizer);


