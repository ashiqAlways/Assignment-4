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
    if(typeof obj !== 'object' || obj === null){
        return 'invalid';
    }

    const {name, birthYear, siteName} = obj;
    if(!name || !birthYear || !siteName){
        return 'invalid';
    }

    if(birthYear.toString().length !== 4){
        return 'invalid';
    }

    const site = siteName[0].toUpperCase() + siteName.slice(1).toLowerCase();

    const finalPassword = `${site}#${name}@${birthYear}`;
    return finalPassword;
}


// console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));




// Problem 05 : Monthly Savings of a Freelancer--------

function monthlySavings(arr, livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'invalid input';
    }

    let totalIncome = 0;

    for(let payment of arr){
        if(payment >= 3000){
            let tax = payment * 0.2;
            let afterTax = payment - tax;
            totalIncome += afterTax;
        }
        else{
            totalIncome += payment;
        }
    }

    const Savings = totalIncome - livingCost;

    if(Savings >= 0){
        return Savings;
    }
    else{
        return 'earn more';
    }
}


console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ))