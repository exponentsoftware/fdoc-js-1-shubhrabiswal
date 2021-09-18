// 1.d. How many words were used to construct this sentence. 
// Now, don't exclude one letter words.
// ```js
// console.log(varietyOfWords(sentence))


function varietyOfWords(sentence){
    let ar1=sentence.split(' ')
    let temp=[]
    for(let word of ar1){
        if(word[word.length-1] == '.'||word[word.length-1] == '?'){
            word = word.substr(0,word.length-1)
        }
        if(temp.includes(word) == false){
            temp.push(word)
        }
    }
    // console.log(temp)
    return temp.length
}



const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(varietyOfWords(sentence));