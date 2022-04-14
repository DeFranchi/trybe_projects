const a = 100;
const b = 50;
const c = 200;
 

if(a > b && a > c){
    console.log('O numero maior é '+ a)
} else if(b > a && b > c){
    console.log('O numero maior é '+ b)
} else if(c > a && c > b ){
    console.log('O numero maior é '+ c)
}else { 
    console.log('Os numeros sao iguais')
}