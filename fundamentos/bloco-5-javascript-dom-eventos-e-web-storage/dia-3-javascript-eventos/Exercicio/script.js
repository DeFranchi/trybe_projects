function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  function creatDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const datelist = document.querySelector("#days");
  for(let i = 0; i < dezDaysList.length; i +=1){
      const date = dezDaysList[i];
      const elemento = document.createElement('li');
      elemento.innerText = date;
      elemento.classList.add('day');

        if(date === 24 || date === 25 || date == 31){
            elemento.classList.add('holiday');

        }

        if(date === 4 || date === 11 || date == 18 || date == 25 ){
            elemento.classList.add('friday');
        }
       

      datelist.appendChild(elemento);
    
    
      
  }
}
creatDays();

//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

/*Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" */





function holidays(feriados){
    const btn = document.createElement("button")
    btn.innerHTML = feriados
    btn.setAttribute('id','btn-holiday')
    

    let item = document.querySelector('.buttons-container')


    item.appendChild(btn)
    
}
holidays("feriados")


let bnt2 = document.getElementById('btn-holiday')

bnt2.addEventListener('click', changeColor)

function changeColor(){
    bnt2.style.backgroundColor = "red"
}







    
    
   




