const jsonInfo = `{
    "muitasEmpresasUsam": [
      "Google",
      "Twitter",
      "Facebook",
      "etc..."
    ],
    "temVariasVantagens": [
      "Legível",
      "Fácil de usar",
      "Leve",
      "Popular",
      "Versátil"
    ],
    "muitasLinguagensDaoSuporte": [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP"
    ]
  }`;
  
  const useJSON = JSON.parse(jsonInfo);
  
  const corporationsUsedBy = document.getElementById('corporations-used-by');
  const advantages = document.getElementById('advantages');
  const languagesUsedBy = document.getElementById('languages-used-by');

 
    useJSON.muitasEmpresasUsam.map((empresa) => {
      const listaEmpresa = document.createElement('li');
      listaEmpresa.innerHTML = empresa;
      corporationsUsedBy.appendChild(listaEmpresa);
    });

    useJSON.temVariasVantagens.map((vantagem) => {
      const listaVantagem = document.createElement('li');
      listaVantagem.innerHTML = vantagem;
      advantages.appendChild(listaVantagem);
    })

    useJSON.muitasLinguagensDaoSuporte.map((linguagem) => {
      const listaLinguagem = document.createElement('li');
      listaLinguagem.innerHTML = linguagem;
      languagesUsedBy.appendChild(listaLinguagem);
    })
  