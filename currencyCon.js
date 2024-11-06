const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";


async function initialize() {
    const response = await fetch(apiUrl);
    const data = await response.json();

   
    const currencies = Object.keys(data.rates);

    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");

    currencies.forEach(currency => {
        const option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = currency;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.textContent = currency;
        toCurrency.appendChild(option2);
    });
    
   
    fromCurrency.value = "USD";
    toCurrency.value = "EUR";
}


async function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const response = await fetch(`${apiUrl}`);
    const data = await response.json();

    const fromRate = data.rates[fromCurrency];
    const toRate = data.rates[toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;

    document.getElementById("convertedValue").textContent = `${convertedAmount.toFixed(2)} ${toCurrency}`;
}


window.onload = initialize;
