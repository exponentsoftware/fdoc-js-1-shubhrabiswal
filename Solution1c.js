// 1.c. After cleaning the text in the sentence from question number b 
// you will get the following text. Count the number of words in this text. 
// Don't include words with only one letter.

// ```js
// const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
// console.log(countWords(sentence));


function countWords(sentence){
    let ar1=sentence.split(' ')
    // console.log(ar1)
    let count = 0;
    
    for (let i of ar1){
        if(i.length>1){
            count++
        }
        
    }
    
    return count
}



const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWords(sentence));