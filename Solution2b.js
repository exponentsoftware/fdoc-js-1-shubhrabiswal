// 2.b. Write a function which returns array of seven random numbers in a 
// range of 0-9. All the numbers must be unique
// ```js
// sevenRandomNumbers()
// [1,4,5,7,9,8,0]

function sevenRandomNumbers(){
    let ar1=[];
    for(let i=1;ar1.length<7;i++){
        let num = Math.floor(Math.random()*10)
        // console.log(num)
        if(ar1.includes(num) == false){
            ar1.push(num)
        }
    }
    return ar1
}

console.log(sevenRandomNumbers())