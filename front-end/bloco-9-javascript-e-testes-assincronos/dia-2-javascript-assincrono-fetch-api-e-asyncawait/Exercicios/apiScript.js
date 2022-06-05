// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


function jokeHml(joke){
    const jokeContainer = document.getElementById('jokeContainer')
    jokeContainer.innerHTML = joke;
}
const fetchJoke = () => {
  const myObject = {
      method: 'GET',
      headers: {'Accept': 'application/json'}
  };
 fetch(API_URL, myObject)
 .then(response => response.json())
 .then(data => data.joke)
 .then(jokeHml);

 
};

window.onload = () => fetchJoke();