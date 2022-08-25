const dataPenjualanPakAldi =
[
    {
        namaProduct:'Sepatu Futsal Nike Vapor Academy B',
        hargaSatuan:7600,
        kategori :'Sepatu Sport',
        totalTerjual:90,
    },
    {
        namaProduct:'Sepatu Warrior Tristan Black Brown High - Original ',
        hargaSatuan: 960000,
        kategori:"sepatu sneaker",
        totalTerjual:37,

    },

    {
        namaProduct:'Sepatu Warrior tristan Maroon High - Original',
        hargaSatuan: 360000,
        kategori:"sepatu sneaker",
        totalTerjual:90,
        
    },
    {
        namaProduct:'Sepatu Warrior rainbow tosca corduroy - [BNIB] Original',
        hargaSatuan: 120000,
        kategori:"sepatu sneaker",
        totalTerjual:90,
        
    }, 
]

console.log


function hitungTotalPenjualan(dataPenjualan){
    let total = 0;
    for(let i = 0; i < dataPenjualan.length; i++) { //membuat perulangan 
        if(typeof dataPenjualan[i].totalTerjual != "number"){ // mengecek bahwa total terjual itu number
            return 'error' // jika tidak number return erorr
        }
        else{
            total += dataPenjualan[i].totalTerjual  // melakukan penjumlahan nilai total terjual
        }
    }
    return total
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi))