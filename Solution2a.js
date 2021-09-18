// 2.a. Looping a triangle: Write a loop that makes seven calls to 
// console.log to output the following triangle:
// ```js
// #
// ##
// ###
// ####
// #####
// ######
// #######


function triangle(size){
    
    for(let i=1;i<=size;i++){
        let op=''
        for(let j=1;j<=i;j++){
            op=op+'#'
        }
        console.log(op)
    }

}

triangle(7)