function checkTypeNumber(givenNumber) {
    const isValidNumber = (val) => {
        if (typeof val === "number")
            return true;

        if (givenNumber=== undefined) {
            return "error: bro where is the parameter?"
        }
        return "error: invalid data type"
    }

    let result = isValidNumber(givenNumber);
    if (result !== true) {
        return result;
    } else {
        if (givenNumber%2 === 0) {
            return "genap"            
        } else {
            return "ganjil"            
        }
    }
}

function checkEmail(email){
    

    if (typeof email !="string"){ //untuk mengecek input yang bukan string
        return "error"
    }
    if (!email.includes('@')){ //untuk mengecek input yang tidak ada "@"
        return 'erorr'
    }
    //regex
    let check = email.match(/^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.(com|co.id|id)$/g)// (+) minimal 1 atau lebih
    if (check) {
        return "valid" //kondisi mengecek inputan email valid 
    }
    return "invalid" //kondisi mengecek inputan email invalid

   

}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata')) //erorr karena dia tidak memiliki inputan @ pada saat memasukan data email
console.log(checkTypeNumber(checkEmail(3322)))
console.log(checkEmail()) //dia erorr karena undefined (tidak terdefinisi)


