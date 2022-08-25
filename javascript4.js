function isValidPassword(email){

    if(typeof email!=="string"){ //untuk mengecek inputan yang bukan string
        return "error"
    }

    //regex
    let check = email.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/) //password terdiri 8 baris , huruf besar awal dan memilih angka
    if(check){
        return "true" //kondisi mengecek inputan password true
    }
    return "false"
    //kondisi mengecek inputan password false

}

console.log(isValidPassword('Meong2021'))//karena memenuhi requirement yang terdiri dari 8 baris, huruf besar, ada huruf kecil, dan angka
console.log(isValidPassword('meong2021')) //karena meong tidak ada huruf besar
console.log(isValidPassword('@ong2021'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0)) //erorr karena bukan string 
console.log(isValidPassword())//dia erorr karena undefined (tidak terdefinisi)