
const numberInput = document.querySelector("#number");
const romanInput = document.querySelector("#roman");
const numberButton = document.querySelector("#btnNum");
const romanButton = document.querySelector("#btnRoman");
const resultNum = document.querySelector('#resultNum');
const resultRoman = document.querySelector('#resultRoman');


const numberList = { M:1000,CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1, S:0.5,}



numberButton.addEventListener("click", numberConverter)
romanButton.addEventListener("click", romanConverter)



let convertedNum = ''
function numberConverter() {
    let value = ''
    let num = numberInput.value
    for (let i in numberList){
       value = Math.floor(num / numberList[i])
        num = num % numberList[i]
        convertedNum += i.repeat(value) 
    }
    resultNum.innerHTML = convertedNum
    convertedNum = ''
    numberInput.value = ''
    numberInput.focus()
}

let convertedRoman = 0
function romanConverter() {
    let numbers = romanInput.value.toUpperCase()
    // let numbers = [...romanInput.value.toUpperCase()]
    const newlist={ CM:900, CD:400, XC:90, XL:40, IX:9, IV:4}
    for(let k in newlist){
        let index = numbers.search(k)
      
        if(index > -1){
            
            convertedRoman = convertedRoman + newlist[k]
            
            resultRoman.innerHTML = convertedRoman
            
            numbers = numbers.replace(k,'')
           
            
        }
    }
    
    for(let i = 0;i < numbers.length;i++){
        for(let j in numberList){
            if(numbers[i] === j){
                convertedRoman += numberList[j]
                resultRoman.innerHTML = convertedRoman
            }
        }
        
    }
    convertedRoman = 0
    romanInput.value = ''
    romanInput.focus()
}