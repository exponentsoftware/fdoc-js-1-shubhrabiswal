// 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.
// The function `countWords` takes a paragraph and two words as parameters. 
// It compare  which word is most frequently occurred in the paragraph.
// ```js
// const paragraph = 'I love teaching. If you do not love teaching what else can you love. 
// I love JavaScript if you do not love something which can give life to your application what else can you 
// love.';
// console.log(countWords(paragraph,'love', 'you'));
// The word love more frequently occurred than you.

function countWords(para,word1,word2){
    let count1 = 0;
    let count2 = 0;
    let ar1 = para.split(' ')
    
    for(let i of ar1){
        
        if(i[i.length-1] == "."){
            i = i.substr(0, i.length-1);
        }
    
        if(i.toUpperCase() == word1.toUpperCase()){
            count1 = count1+1
        }
        if(i.toUpperCase() == word2.toUpperCase()){
            count2 = count2+1
        }
    }
    // console.log(count1,count2)
    if(count1>count2){
        return "The "+word1+" ocuurs more frequently occurred than "+word2+"."
    }else if(count2>count1){
        return "The "+word2+" ocuurs more frequently occurred than "+word1+"."
    }else{
        return "Both the words "+word1+" and "+word2+" have same frequency. "
    }

}

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(countWords(paragraph,'love', 'you'));