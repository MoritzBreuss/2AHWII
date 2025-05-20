// HTML-Elemente
const svgSolana = document.getElementById('my-svg');
const svgUpgrade1 = document.getElementById('Upgrade1');
const svgUpgrade2 = document.getElementById('Upgrade2');
const svgUpgrade3 = document.getElementById('Upgrade3');
const svgUpgrade4 = document.getElementById('Upgrade4');
const svgAutoClicker1 = document.getElementById('AutoClicker1');
const svgAutoClicker2 = document.getElementById('AutoClicker2');
const svgAutoClicker3 = document.getElementById('AutoClicker3');
const resetButton = document.getElementById('resetButton');
const ascendButton = document.getElementById('ascendButton');

// Prices
let upgrade1Price = 50;  
let upgrade2Price = 15000;
let upgrade3Price = 1000000;
let upgrade4Price = 10000000;
let autoClicker1Price = 25000;  
let autoClicker2Price = 100000;  
let autoClicker3Price = 1000000;
let ascendPrice = 50000000;


// Werte
let amount = 0;
let baseClick = 1;
let amountPerClick = baseClick;
let amountPerSecond = 0;
let amountPerSecondActive = 0;
let amountPerSecondPassiv = 0;
let amountPerSecondPassivAutoClicker1 = 0;
let amountPerSecondPassivAutoClicker2 = 0;

// Fortschritt
let totalClicks = 0;
let totalAmount = 0;

// Achievements
let tenThousandTotalAmount = false;
let thousandTotalClicks = false;

// Upgrade-Level
let upgrade1Level = 0;
let upgrade2Purchased = false;

// Multiplier
let autoClicker1Count = 0;
let autoClicker2Count = 0;
let autoClicker2Multiplier = 1;
let Upgrade1Multiplier = 1.1;
let upgrade2Multiplier = 1.0;
let upgrade3Multiplier = 1.0;
let ascendMultiplier = 1.0;

// Price Multipliers
let upgrade1PriceMultiplier = 1.5;
let upgrade2PriceMultiplier = 1.5;
let upgrade3PriceMultiplier = 1.5;
let autoClicker1PriceMultiplier = 1.5;
let autoClicker2PriceMultiplier = 1.5;
let autoClicker3PriceMultiplier = 1.5;

let clicksPerSecond = 0;
let clicksThisSecond = 0;

function updateUI() {
    document.getElementById('amount').textContent = `Total Solana: ${amount.toFixed(2)}`;
    document.getElementById('amountPerClick').textContent = `Amount per click: ${amountPerClick.toFixed(2)}`;
    document.getElementById('amountPerSecond').textContent = `Amount per second: ${amountPerSecond.toFixed(2)}`;
    document.getElementById('Upgrade1Price').textContent = `Cursor Price: ${upgrade1Price}`;
    document.getElementById('Upgrade2Price').textContent = `Grandma Upgrade Price: ${upgrade2Price}`;
    document.getElementById('AutoClicker1Price').textContent = `Grandma Price: ${autoClicker1Price}`;
    document.getElementById('AutoClicker2Price').textContent = `Factory Price: ${autoClicker2Price}`;
}

function updateProductionAutoClicker1() {
    amountPerSecondPassivAutoClicker1 = autoClicker1Count * upgrade2Multiplier * ascendMultiplier;
}

function updateProductionAutoClicker2() {
    amountPerSecondPassivAutoClicker2 = autoClicker2Count * upgrade3Multiplier * ascendMultiplier;
}

svgSolana.addEventListener('click', () => {
    amount += amountPerClick;
    totalAmount += amountPerClick;
    totalClicks += 1;
    clicksThisSecond ++;

    if (totalClicks >= 1000 && !thousandTotalClicks) {
        thousandTotalClicks = true;
        alert("You have clicked 1000 times!");
    }

    updateUI();
});

svgUpgrade1.addEventListener('click', () => {
    if (amount >= upgrade1Price) {
        amount -= upgrade1Price;
        upgrade1Level += 1;
        amountPerClick = baseClick * Math.pow(Upgrade1Multiplier, upgrade1Level) * ascendMultiplier;
        upgrade1Price = Math.floor(upgrade1Price * upgrade1PriceMultiplier);
        updateUI();
    } else {
        alert("Not enough Solana!");
    }
});

svgUpgrade2.addEventListener('click', () => {
    if (amount >= upgrade2Price) {
        if (autoClicker1Count > 0) {
            amount -= upgrade2Price;
            upgrade2Multiplier += 0.1;
            upgrade2Price = Math.floor(upgrade2Price * upgrade2PriceMultiplier);
            updateProductionAutoClicker1();
            updateUI();
        } else {
            alert("Du musst zuerst AutoClicker 1 kaufen!");
        }
    } else {
        alert("Nicht genug Solana!");
    }
});

svgUpgrade3.addEventListener('click', () => {
    if(amount >= upgrade3Price) {
        if(autoClicker2Count > 0) {
            amount -= upgrade3Price;
            autoClicker2Count += 10;
            upgrade3Multiplier += 0.1;
            upgrade3Price = Math.floor(upgrade3Price * upgrade3PriceMultiplier);
            updateProductionAutoClicker2();
            updateUI();
        } else {
            alert("Du musst zuerst AutoClicker 2 kaufen!");
        }
    } else {
        alert("Nicht genug Solana!");
    }
});

svgAutoClicker1.addEventListener('click', () => {
    if (amount >= autoClicker1Price) {
        amount -= autoClicker1Price;
        autoClicker1Count += 1;
        autoClicker1Price = Math.floor(autoClicker1Price * autoClicker1PriceMultiplier);
        updateProductionAutoClicker1();
        updateUI();
    } else {
        alert("Not enough Solana!");
    }
});

svgAutoClicker2.addEventListener('click', () => {
    if (amount >= autoClicker2Price) {
        amount -= autoClicker2Price;
        autoClicker2Count += 1;
        amountPerSecondPassivAutoClicker2 += 10 * ascendMultiplier;
        autoClicker2Price = Math.floor(autoClicker2Price * autoClicker2PriceMultiplier);
        updateUI();
    } else {
        alert("Not enough Solana!");
    }
});

let intervalId = setInterval(() => {
    updateProductionAutoClicker1();
    amountPerSecondPassiv = amountPerSecondPassivAutoClicker1 + amountPerSecondPassivAutoClicker2;
    amountPerSecondActive = clicksPerSecond * amountPerClick;
    amountPerSecond = amountPerSecondPassiv + amountPerSecondActive;
    amount = amount + amountPerSecond;
    totalAmount = totalAmount + amountPerSecond
    clicksPerSecond = clicksThisSecond;
    clicksThisSecond = 0;  
    updateUI();

   
    if (totalAmount >= 10000 && !tenThousandTotalAmount) {
        tenThousandTotalAmount = true;
        alert("You have reached 10000 Solana!");
    }

}, 1000);


ascendButton.addEventListener('click', () => {
    if (amount >= ascendPrice) {
        amount = 0;
        upgrade1Level = 0;
        autoClicker1Count = 0;
        amountPerSecondPassivAutoClicker1 = 0;
        amountPerSecondPassivAutoClicker2 = 0;
        upgrade2Multiplier = 1.0;
        ascendMultiplier += 0.5;

        amountPerClick = baseClick * ascendMultiplier;

        updateProductionAutoClicker1();
        updateUI();
    } else {
        alert("Not enough Solana!");
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);

    amount = 0;
    totalClicks = 0;
    totalAmount = 0;

    baseClick = 1;
    amountPerClick = baseClick;
    amountPerSecondPassiv = 0;
    amountPerSecondPassivAutoClicker1 = 0;
    amountPerSecondPassivAutoClicker2 = 0;

    autoClicker1Count = 0;
    upgrade1Level = 0;
    upgrade2Multiplier = 1.0;
    ascendMultiplier = 1.0;

    upgrade1Price = 10;
    upgrade2Price = 10000;
    autoClicker1Price = 5000;
    autoClicker2Price = 100000;

    tenThousandTotalAmount = false;
    thousandTotalClicks = false;

    intervalId = setInterval(() => {
        updateProductionAutoClicker1();
        amountPerSecondPassiv = amountPerSecondPassivAutoClicker1 + amountPerSecondPassivAutoClicker2;
        amount += amountPerSecondPassiv;
        totalAmount += amountPerSecondPassiv;
        clicksPerSecond = clicksThisSecond;
        clicksThisSecond = 0;

        if (totalAmount >= 10000 && !tenThousandTotalAmount) {
            tenThousandTotalAmount = true;
            alert("You have reached 10000 Solana!");
        }

        updateUI();
    }, 1000);

    updateUI();
    alert("Game has been reset!");
});
