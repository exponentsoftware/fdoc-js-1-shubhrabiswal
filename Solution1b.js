// 1.b. Write a function called ***cleanText***. 
// The function takes raw text as a parameter and returns the clean text.
// ```js
// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. 
// There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching 
// m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to 
// be a tea@cher!?`;
//     console.log(cleanText(sentence));
// `I am a teacher and I love teaching. There is nothing as more rewarding as
//  educating and empowering people. I found teaching more interesting than any 
//  other jobs. Does this motivate you to be a teacher?`


function cleanText(sentence){
    let output = []
    for(let i=0;i<sentence.length;i++){
        if(sentence.charCodeAt(i) == 32 || sentence.charCodeAt(i)  == 46 || sentence.charCodeAt(i) == 63|| (sentence.charCodeAt(i) >=65 && sentence.charCodeAt(i) <=90) || (sentence.charCodeAt(i) >=97 && sentence.charCodeAt(i) <=122)){
            output.push(sentence[i])  //32-space, 46-'.', 63-'?'
        }
    }
    let res = output.join('')
    return res
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));