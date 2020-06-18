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
    


//Flex, Target and PiggyBank are all 10% interest per annum
//Frequency amount is either the amount of days or months Saved
function calc () {
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
            period = Math.sol / 8.64E7;
        }

        if(frequency === 'weekly') {
            period = sol / 6.048E8;
        }

        if(frequency === 'monthly') {
            period =  sol / 2.682E9;
        }
    

    if(plan === 10){
        tenPercent(amount);
    }
    
    
    if(plan === 15.5){
        fifteenPercent(amount);
    }
    
    function tenPercent(a) {
        let r = 10/100;
        const interest = a * period;
        const interestGained = (interest * r) + interest;
        const savings = Math.floor(interestGained)
        displayAmount.textContent = savings;
        console.log(period)
    }
    
    function fifteenPercent(a) {
        let r = 15.5/100
        const interest = a * period;
        const interestGained = (interest * r) + interest;
        const savings = Math.floor(interestGained)
        displayAmount.textContent = savings;
    }

    
}

calculate.addEventListener('click', (e) => {
    e.preventDefault();
    calc()

})


    

