console.log("Space Launch Dash running");

const moveTo = (item, spot) => (spot <= 6 ? item.style.setProperty("grid-column", spot) : null);

let apollo_spot = 1; 
let nebula_spot = 1;
let comet_spot  = 1;

// Query Selectors
const apolloBtn   = document.querySelector("#apollo-btn");
const nebulaBtn   = document.querySelector("#nebula-btn");
const cometBtn    = document.querySelector("#comet-btn");

const apolloRocket = document.querySelector("#apollo-rocket");
const nebulaRocket = document.querySelector("#nebula-rocket");
const cometRocket  = document.querySelector("#comet-rocket");

const winnerBox = document.querySelector("#winner-box");

// Click Handlers
const boostApollo = () => { 
    apollo_spot += 1;
    moveTo(apolloRocket, apollo_spot);
  
};

const boostNebula = () => { 
    nebula_spot += 1;
    moveTo(nebulaRocket, nebula_spot);

};

const boostComet = () => { 
    comet_spot += 1;
    moveTo(cometRocket, comet_spot);

};

// Winner Check 
const checkWinner = () => {
    if (apollo_spot === 6) {
        winnerBox.textContent = "Apollo Rocket Wins!";
    } else if (nebula_spot === 6) {
        winnerBox.textContent = "Nebula Rocket Wins!";
    } else if (comet_spot === 6) {
        winnerBox.textContent = "Comet Rocket Wins!";
    }
};


// Events 
apolloBtn.addEventListener("click", () => {
    boostApollo();
    checkWinner();
});

nebulaBtn.addEventListener("click", () => {
    boostNebula();
    checkWinner();
}); 
cometBtn.addEventListener("click", () => {
    boostComet (); 
    checkWinner();
});

