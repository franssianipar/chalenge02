
function changeWord(selectedText,changeText,text){
    
    let arr = text.split(" ") //memisahkan kata

    for (let i=0 ; i<arr.length; i++){ // perulangan mengecek kata dan mengubah kata
            if(arr[i]=== selectedText){
                arr[i] = changeText
            }
    }
    return arr.join(" ")//mengembalikan nilai arr dan menggabungkannya
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

console.log(changeWord('mencintai','membenci',kalimat1))

console.log(changeWord('bromo','semeru',kalimat2))