
function verificaPalindrome(b){
    let verifica = "";
    for(let i = b.length - 1; i >=0; i-- ){
       verifica = verifica + b[i];
    }

     if (verifica === b){
        return true;
    } else{
        return false;
    }

}
 console.log(verificaPalindrome("arara")) ;