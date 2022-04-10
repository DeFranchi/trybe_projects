let array = ['java', 'javascript', 'python', 'html', 'css'];
let maxString = " ";
let arrayNumber = [];
let max = 0;

for(i = 0; i < array.length; i +=1){
    maxString = array[i] 
    arrayNumber.push(maxString.length);      
}

max = Math.max(...arrayNumber);
let indexMax = arrayNumber.indexOf(max)

console.log(array[indexMax]);


let array2 = ['java', 'javascript', 'python', 'html', 'css'];
let minString = " ";
let arrayNumber2 = [];
let min = 0;

for(i = 0; i < array.length; i +=1){
    minString = array[i] 
    arrayNumber2.push(minString.length);      
}

min = Math.min(...arrayNumber);
let indexMin = arrayNumber2.indexOf(min)

console.log(array2[indexMin]);