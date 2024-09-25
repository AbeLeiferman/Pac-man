document.addEventListener('DOMContentLoaded', () => {
    const scoreDisplay = document.getElementById('score'); // Score display
    const width = 28; // Width of the grid
    let score = 0; // Initialize score
    const grid = document.querySelector('.grid'); // Grid element


    // Game layout
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        // Your layout here...
    ];


    const squares = []; // Array to hold grid squares


    // Create the game board
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div');
            square.id = i;
            grid.appendChild(square);
            squares.push(square);


            // Add layout to the board
            if (layout[i] === 0) squares[i].classList.add('pac-dot');
            if (layout[i] === 1) squares[i].classList.add('wall');
            if (layout[i] === 2) squares[i].classList.add('ghost-lair');
            if (layout[i] === 3) squares[i].classList.add('power-pellet');
        }
    }
    createBoard();


    // Pac-Man's initial position
    let pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pac-man');




    function movePacman(e) {
        squares[pacmanCurrentIndex].classList.remove('pac-man');
       
        switch (e.key) {
            case 'ArrowLeft':
                if (pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')) {
                    pacmanCurrentIndex -= 1;
                }
                if (pacmanCurrentIndex === 364) { // Only teleport at the correct index
                    pacmanCurrentIndex = 391;
                }
                break;
               
                case 'ArrowRight':
                    // Check for teleportation before moving Pac-Man
                    if (pacmanCurrentIndex === 391) {
                        pacmanCurrentIndex = 364;
                        break;  // Break after teleportation to prevent further movement
                    }
                    if (pacmanCurrentIndex % width < width - 1 &&
                        !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                        !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')) {
                        pacmanCurrentIndex += 1;
                    }
                    break;
               
               
            case 'ArrowUp':
                if (pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')) {
                    pacmanCurrentIndex -= width;
                }
                break;
               
            case 'ArrowDown':
                if (pacmanCurrentIndex + width < width * width &&
                    !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')) {
                    pacmanCurrentIndex += width;
                }
                break;
        }
       
        squares[pacmanCurrentIndex].classList.add('pac-man');
        pacDotEaten()
        powerPelletEaten()
        checkForGameOver()
        checkForWin()




    }
    document.addEventListener('keydown', movePacman); // Using keydown for better responsiveness




    // what happens when you eat a pac-dot
    // update Score and Score Display
  // Function to handle Pac-Dot being eaten
  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score++;
        scoreDisplay.innerHTML = score;
        squares[pacmanCurrentIndex].classList.remove('pac-dot'); // remove the pac-dot
    }
}
function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score += 10;
        scoreDisplay.innerHTML = score;

        // Make all ghosts scared
        ghosts.forEach(ghost => {
            ghost.isScared = true; // Mark ghosts as scared
            squares[ghost.currentIndex].classList.add('scared-ghost'); // Visual change
        });

        // Remove the power pellet
        squares[pacmanCurrentIndex].classList.remove('power-pellet');

        // Unscare ghosts after 10 seconds
        setTimeout(unScareGhosts, 10000);
    }
}









//make the ghosts stop flashing
function unScareGhosts() {
    ghosts.forEach(ghost => {
        ghost.isScared = false; // Reset scared state
        squares[ghost.currentIndex].classList.remove('scared-ghost'); // Remove visual cue
    });
}









// Create ghosts using Constructor
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.isScared = false;
        this.timerId = NaN;
    }
}

// All your ghosts
const ghosts = [
    new Ghost('simon', 348, 250),
    new Ghost('mikey', 376, 400),
    new Ghost('jacky', 351, 300),
    new Ghost('avi', 379, 500),
];

// Draw the ghosts onto the grid
function drawGhosts() {
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
    });
}

// Move a single ghost
function moveGhost(ghost) {
    const directions = [-1, 1, width, -width]; // Up, down, left, right

    ghost.timerId = setInterval(function () {
        let direction = directions[Math.floor(Math.random() * directions.length)];

        // Check if the new position is not a wall and is within bounds
        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            (ghost.currentIndex + direction >= 0 && ghost.currentIndex + direction < squares.length)
        ) {
            // Remove ghost from current position
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');

            // Update the ghost's position
            ghost.currentIndex += direction;

            // Check if the ghost is scared
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost'); // Add scared class
            } else {
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost'); // Add normal ghost class
            }
        } else {
            // If it hits a wall or goes out of bounds, don't change position
            // Optionally, you can change direction here to try a different move
            // You can also skip this logic to let it stay in the same position
        }

        // Check for collision with Pac-Man
        if (ghost.currentIndex === pacmanCurrentIndex) {
            if (ghost.isScared) {
                // Pac-Man eats the ghost
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
                score += 100; // Add points for eating the ghost
                scoreDisplay.innerHTML = score;

                // Reset ghost to its starting position
                ghost.currentIndex = ghost.startIndex; 
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost'); // Re-add ghost to starting square
            } else {
                // Ghost eats Pac-Man
                gameOver(); // Handle Pac-Man losing a life or game over
            }
        }
    }, ghost.speed);
}




// Draw ghosts and start moving them
ghosts.forEach(ghost => moveGhost(ghost));





// stop game actions (used in both game over and win conditions)
function stopGame() {
    ghosts.forEach(ghost => clearInterval(ghost.timerId));
    document.removeEventListener('keyup', movePacman);
}


// check for a game over
function checkForGameOver() {
    if (
        squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
    ) {
        stopGame();
        setTimeout(function() { alert('Game Over'); }, 500);
    }
}


// check for a win
function checkForWin() {
    if (score >= 274) {
        stopGame();
        setTimeout(function() { alert('You have WON!'); }, 500);
    }
}

























})


