const selectCurrency1 = document.getElementById('currency-one');
const selectCurrency2 = document.getElementById('currency-two');
const inputAmount1 = document.getElementById('amount-one');
const inputAmount2 = document.getElementById('amount-two');
const btnSwap = document.getElementById('swap');
const txtRate = document.getElementById('rate');


function calculate() {
    const currency1 = selectCurrency1.value;
    const currency2 = selectCurrency2.value;

    fetch(`https://api.exchangeratesapi.io/latest?base=${currency1}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency2];

            txtRate.innerText = `1 ${currency1} = ${rate} ${currency2}`;
            inputAmount2.value = (inputAmount1.value * rate).toFixed(2);
        });
}

selectCurrency1.addEventListener('change', calculate);
selectCurrency2.addEventListener('change', calculate);
inputAmount1.addEventListener('input', calculate);
inputAmount2.addEventListener('input', calculate);
btnSwap.addEventListener('click', () => {
    let temp = selectCurrency1.value;
    selectCurrency1.value = selectCurrency2.value;
    selectCurrency2.value = temp;
    calculate();
});