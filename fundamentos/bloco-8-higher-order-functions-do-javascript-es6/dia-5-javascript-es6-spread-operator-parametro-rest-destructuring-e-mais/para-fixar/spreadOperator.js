const imc = (altura, peso) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [1.60, 50];

console.log(imc(...patientInfo)); // 20.76