/* Створіть змінну userMoney в якій розмістіть сумму гршей що має користувач. Використовуючи массив обєктів 
     let bank = [
        {
            currency: 'usa',
            price:38
        },
        {
            currency: 'eur',
            price:39
        },
        {
            currency: 'zlt',
            price:10
        }
    ]
CТворіть массив з  інформацію скільки валюти може отримати користувач з його збережень в форматі " за 76 грн ви можете отримати 2 usa " і т.д*/

let userMoney = 1000;

let bank = [
    {
        currency: 'usa',
        price:38
    },
    {
        currency: 'eur',
        price:39
    },
    {
        currency: 'zlt',
        price:10
    }
]

let exchangeRates = bank.map(item => {
    let amount = Math.floor(userMoney / item.price); 
    return (`For ${userMoney}  you can take ${amount} ${item.currency}`);
});

console.log(exchangeRates);