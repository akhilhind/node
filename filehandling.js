const fs = require("fs");

function utter() {
    console.log("ho gya sab");
}


fs.writeFile("akhil.txt", "akhil is best", utter);