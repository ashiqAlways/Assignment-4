// Problem-01 : Help The Zoo Manager-------

function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return 'Invalid Number';
    }

    const ticketPrice = 120;
    const guardCost = 500;
    const staffCost = 50 * 8;
    const totalCost = guardCost + staffCost;
    
    const totalIncome = ticketSale * ticketPrice;
    const remainingMoney = totalIncome - totalCost;
    return remainingMoney;
}

// console.log(calculateMoney(10))



// Problem-02: Good Name , Bad Name-------

function checkName(name){
    if(typeof name !== 'string'){
        return 'invalid';
    }

    name = name.toLowerCase();
    const lastChar = name[name.length - 1];
    const goodLetters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if(goodLetters.includes(lastChar)){
        return 'Good Name';
    }
    else{
        return 'Bad name';
    }  
}

// console.log(checkName('Aashiqy'));



