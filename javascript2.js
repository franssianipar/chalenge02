function checkTypeNumber(givenNumber) {
    const isValidNumber = (val) => { //arrow function
        if (typeof val === "number") //kondisi mengecek angka atau bukan
            return true;

        if (givenNumber=== undefined) { //kondisi mengecek nilai undefined 
            return "error: bro where is the parameter?"
        }
        return "error: invalid data type"
    }

    let result = isValidNumber(givenNumber);
    if (result !== true) { 
        return result;
    } else {
        if (givenNumber%2 === 0) {//mengecek nilai ganjil genap
            return "genap"            
        } else {
            return "ganjil"            
        }
    }
}
console.log(checkTypeNumber(10))//output ("Genap")
console.log(checkTypeNumber(3))//output ("Ganjil")
console.log(checkTypeNumber("3"))//output ( "error: invalid data type")
console.log(checkTypeNumber({}))//output ( "error: invalid data type")
console.log(checkTypeNumber([]))//output ( "error: invalid data type")
console.log(checkTypeNumber())//output ( "error: bro where is the parameter?")