let bruto = 3000;
let inss;
let ImpostoDeRenda;



     if(bruto <= 1556.94){
        inss = 0.08 * bruto;
    } else if(bruto <= 2594.92 && bruto > 1556.94){
        inss = 0.09 * bruto;
    } else if (bruto <= 5189.82 && bruto > 2594.92){
        inss = 0.11 * bruto;
    } else if (bruto > 5189.82){
        inss = 570.88;
    }   
    

    let salarioBase = bruto - inss;


    if(salarioBase <= 1903.98){
        ImpostoDeRenda = 0;
    } else if(salarioBase <= 2826.65 && bruto > 1903.98){
        ImpostoDeRenda = 0.075 * salarioBase - 142.80;
    } else if(salarioBase <= 3751.05 && bruto > 2826.65){
        ImpostoDeRenda = 0.15 * salarioBase - 354.80;
    } else if(salarioBase <= 4664.68 && bruto > 3751.06 ){
        ImpostoDeRenda = 0.225 * salarioBase - 636.13;
    } else if(salarioBase > 4664.68){
        ImpostoDeRenda = 0.275 * salarioBase - 869.36;
    }

    let salario = salarioBase - ImpostoDeRenda

    console.log(salario)








