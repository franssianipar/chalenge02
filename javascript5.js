function getSplitName(personName){

    if (typeof personName!= "string"){ //untuk mengecek input yang bukan string
        return "error"
    }

    let arr = personName.split(" ")
    let result = {       //menyimpan kata ke result dan menampilkannya di output
        firstName: null, 
        middleName:null,
        lastName: null,
    }

    if (arr.length === 1){ //mengecek jika terdapat 1 kata
        result.firstName= arr[0];
        return result;
    }
    else if(arr.length === 2){ //mengecek jika terdapat 2 kata
        result.firstName=arr[0];
        result.lastName=arr[1];
        return result;
    }

    else if(arr.length === 3){ //mengecek jika terdapat 3 kata
        result.firstName=arr[0];
        result.middleName=arr[1];
        result.lastName=arr[2];
        return result;
    }

    else{
        return "error"
    }

    

}

console.log(getSplitName("Aldi Daniela Pranata")) 
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))//error karena terdapat 4 kata
console.log(getSplitName(0)) //erorr karena bukan tipe data string
