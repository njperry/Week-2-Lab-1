let playerName = undefined;

let playerHealth = 40;

let grantHealth = 10;

let playerWins = 0;

let grantWins = 0;

let playerDamage = 0;

let grantDamage = 0;

let play = prompt("Do you want to play a game?");

if (play === "yes") {
    playerName = prompt("Choose your Name");

    while (grantWins < 1 && playerWins < 3) {

        if (playerHealth > 0 && grantHealth > 0) {

            playerDamage = Math.floor(Math.random() * 2) + 1;
            playerHealth = playerHealth - playerDamage;

            grantDamage = Math.floor(Math.random() * 2) + 1;
            grantHealth = grantHealth - grantDamage;

            console.log(`${playerName} has ${playerHealth} remaining`);
            console.log(`Grant has ${grantHealth} remaining`);
        }

        else if (grantHealth <= 0) {
            playerWins++;
            grantHealth = 10;
            console.log(`${playerName} has ${playerWins} wins`);
        }

        else if (playerHealth <= 0) {
            console.log("Grant Wins!");
        }

        if (playerWins === 3) {
            console.log(`${playerName} wins!`);
        }
    }
}