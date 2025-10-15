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



// Problem 03 : Virus in my Array-----

function deleteInvalids(array){
    if(!Array.isArray(array)){
        return 'Invalid Array';
    }

    let validNumbers = [];
    for(const item of array){
        if(typeof item === 'number' && !isNaN(item)){
            validNumbers.push(item);
        }
    }
    return validNumbers;

}

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ));



// Problem 04 : Make A Great Password--------

function password(obj){
    
}