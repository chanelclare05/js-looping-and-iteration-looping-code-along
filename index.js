// Code your solutions in this file

function writeCards(arrayOfNames, eventName) {
    let newArray = []
    for (let i = 0 ; i<arrayOfNames.length ; i++){
    newArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray;
}

function countDown(num) {
    while ( num <= 10 && num >=0){
        console.log(num--);
    }
}
