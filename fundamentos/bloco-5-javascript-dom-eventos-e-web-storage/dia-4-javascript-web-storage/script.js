const botao = document.getElementById('botao');

botao.addEventListener('click', function onClick(event){
    console.log(event.target);

    event.target.style.color = "red";

})

