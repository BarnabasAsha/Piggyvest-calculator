// Mobile Navigation
const hamburger = document.querySelector('.mobile');
const close = document.getElementById('close');
const navContents = document.getElementById('mobile-nav-content')
const mobileLinks = document.querySelectorAll('#mobile-nav-content a')


hamburger.addEventListener('click', () => {
    console.log('hhhhhhh')
    navContents.style.display = 'flex';
    setTimeout(navContentsShow, 500)
})

close.addEventListener('click', () => {
    navContents.style.display = 'none';
    navContents.style.transform = 'translateX(-50%)';
    navContents.style.opacity = '0';
    for(let i=0; i<mobileLinks.length; i++){
        mobileLinks[i].style.opacity = '0';
        mobileLinks[i].style.transform = 'translateX(-50%)';
    }
})

function navContentsShow () {
    navContents.style.transform = 'translate(0)';
    navContents.style.opacity = '1';

    for(let i=0; i<mobileLinks.length; i++){
        mobileLinks[i].style.opacity = '1';
        mobileLinks[i].style.transform = 'translate(0)';
    }
}


//Interest Calculation
    const calculate = document.getElementById('calculate')
    

    const amount = parseFloat(document.getElementById('amount').value)
    const plan = parseFloat(document.getElementById('plan').value)
    const frequency = document.getElementById('frequency').value
    const startDate = document.getElementById('start-date').value
    const payDate = document.getElementById('pay-date').value
    const displayAmount = document.getElementById('totalSavings')

    const d1 = new Date(startDate)
    const d2 = new Date(payDate)
    const sol = Math.abs(d2 - d1);

    let period;

        if(frequency === 'daily') {
            period = sol / 8.64E7;
        }

        if(frequency === 'weekly') {
            period = sol / 6.048E8;
        }

        if(frequency === 'monthly') {
            period =  sol / 2.682E9;
        }
//Flex, Target and PiggyBank are all 10% interest per annum
//Frequency amount is either the amount of days or months Saved
function calc () {
    // This calculates the difference btw withdrawal date and start date
    
    if(plan === 10){
        tenPercent(amount);
    }
    
    
    if(plan === 15.5){
        fifteenPercent(amount);
    }
    
    //Ten percent interest

    function tenPercent(a) {
        let r = 10/100;
        const interest = a * period;
        const interestGained = (interest * r) + interest;
        const savings = Math.floor(interestGained)
        displayAmount.textContent = savings;
    }
    // Fifteen percent interest

    function fifteenPercent(a) {
        let r = 15.5/100
        const interest = a * period;
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
    errorMessage.innerHTML = 'Please pick a frequency'
    setTimeout(() => {
        errorMessage.remove()
    }, 2000)
}else if(document.getElementById('start-date').value === ''){
    errorMessage.style.display = 'block'
    errorMessage.innerHTML = 'Please pick a start date'
    setTimeout(() => {
        errorMessage.remove()
    }, 2000)
}else if(document.getElementById('pay-date').value === ''){
    errorMessage.style.display = 'block'
    errorMessage.innerHTML = 'Please pick a payback date'
    setTimeout(() => {
        errorMessage.remove()
    }, 2000)
}else if(period < 1) {
        errorMessage.textContent = 'Please select a time-frame that is consistent with your chosen frequency'
        errorMessage.style.display = 'block'
        setTimeout(() => {
           errorMessage.remove()
        }, 2000)
    }else {
        calc()
    }
}
calculate.addEventListener('click', (e) => {
    e.preventDefault();
    checkFields()
})








    

