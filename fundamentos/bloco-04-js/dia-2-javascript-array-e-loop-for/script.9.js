let numbers = [];
let result = [];

for( let index = 1; index < 26; index +=1){
    numbers.push(index);
   
    
}

for(let odd of numbers){
    result.push(odd / 2);
    console.log(result);
    
}

