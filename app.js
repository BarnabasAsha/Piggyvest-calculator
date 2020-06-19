//Interest Calculation
//The calculate button
const calculate = document.getElementById('calculate')
    
//Getting form values

const plan = document.getElementById('plan')
const frequency = document.getElementById('frequency')
const duration = document.getElementById('duration')
// const startDate = document.getElementById('start-date')
// const payDate = document.getElementById('pay-date')
const displayAmount = document.getElementById('totalSavings')
const amount = document.getElementById('amount')



// //converts date value to milliseconds
// const d1 = new Date(startDate.value)
// const d2 = Date.parse(document.getElementById('start-date').value)
// const sol = Math.abs(d2 - d1);

let period;

    if(frequency.value === 'daily') {
        period = 30;
    }

    if(frequency.value === 'weekly') {
        period = 4;
    }

    if(frequency.value === 'monthly') {
        period =  1;
    }
//Flex, Target and PiggyBank are all 10% interest per annum
//Frequency amount is either the amount of days or months Saved
function calc () {
// This calculates the difference btw withdrawal date and start date

if(plan.value == '10'){
    tenPercent(parseFloat(amount.value));
}

if(plan.value == '15.5'){
    fifteenPercent(parseFloat(amount.value));
}

//Ten percent interest

function tenPercent(a) {
    let r = 10/100;
    const interest = a * period * parseFloat(duration.value);
    const interestGained = (interest * r) + interest;
    const savings = Math.floor(interestGained)
    displayAmount.textContent = savings;
}
// Fifteen percent interest

function fifteenPercent(a) {
    let r = 15.5/100
    const interest = a * period * parseFloat(duration.value);
    const interestGained = (interest * r) + interest;
    const savings = Math.floor(interestGained)
    displayAmount.textContent = savings;
}    
}



function checkFields() {
const form = document.getElementById('form')
const errorMessage = document.createElement('div')
errorMessage.className = 'error'
form.appendChild(errorMessage)


//Ensures all fields are completely filled
//Ensures later date is greater than former date and also not earlier than the current date
//Ensures that the frequency chosen matches the timeline picked
if(document.getElementById('amount').value === ''){
        errorMessage.style.display = 'block'
        errorMessage.innerHTML = 'Please input an amount'
        setTimeout(() => {
            errorMessage.remove()
        }, 2000)
}else if(document.getElementById('plan').value === ''){
    errorMessage.style.display = 'block'
    errorMessage.innerHTML = 'Please pick a plan'
    setTimeout(() => {
        errorMessage.remove()
    }, 2000)
}else if(document.getElementById('frequency').value === ''){
errorMessage.style.display = 'block'
errorMessage.innerHTML = 'Please input a frequency'
setTimeout(() => {
    errorMessage.remove()
}, 2000)
}else if(document.getElementById('duration').value === ''){
    errorMessage.style.display = 'block'
    errorMessage.innerHTML = 'Please input a duration'
    setTimeout(() => {
        errorMessage.remove()
    }, 2000)
    }else {
    calc()
}}
calculate.addEventListener('click', (e) => {
e.preventDefault();
checkFields()
})
