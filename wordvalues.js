let strings = ["abc", "abc"];

/*const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
*/



let arr2 = ["a","b","c"]
let innerArray = [];


let translater = strings.map(function(string){
    let innerArray = [];
    for (let i=0; i < string.length; i++){
        
        let oneChar = string[i];
        console.log(oneChar);
        let check = (arr2.indexOf(oneChar)) + 1;
        console.log("check: " + check);
        innerArray.push(check) 
    
    }
    return innerArray;
})

console.log(translater);


//array reducer
let finalArr = [];

for (let i=0; i < translater.length; i++){
    let sum = translater[i].reduce(function (accumulator, currentValue){
        return accumulator + currentValue
    },0)
    console.log(sum)
    let multiplier = i + 1;
    let result = sum * multiplier;
    console.log(result);
    finalArr.push(result);
    
}


console.log(finalArr);