function getAngkaTerbesarKedua(arr){

    if (!(arr instanceof Array)) {
        return "error"    //untuk mengecek yang bukan array
    }

    let angkaTerbesar=0
    for( let i=0; i<arr.length;i++){ //melakukan perulangan dan mengambil angka terbesar
        if(angkaTerbesar<arr[i]){
            angkaTerbesar = arr[i]
        }
        
    }

    
    let angkaTerbesarKedua = 0
    for( let i=0; i<arr.length;i++){ //melakukan perulangan untuk mengecek kondisi angka terbesar kedua di dataAngka
        if(angkaTerbesarKedua<arr[i] && arr[i]!= angkaTerbesar){ //jika angkaterbesarkedua lebih kecil dari element i dan dia bukan angka terbesar
            angkaTerbesarKedua = arr[i]
        }
    }

    return angkaTerbesarKedua
}

const dataAngka =[9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka)) 

console.log(getAngkaTerbesarKedua(0)) //error karena dia bukan array 

console.log(getAngkaTerbesarKedua()) //erorr karena undefined