//je crée une variable pour créer mon tableau
let name = ['HTML','CSS','C#'];
//je crée une fonction
function add() {
  //variable qui cible la valeur de mon input
  let input = document.getElementById('input').value;
  //la valeur de mon input sera ajouté au début de mon tableau
  name.unshift(input);
  alert ( name + 'a été ajouté au tableau' );
  //le résultat sera églament affiché sur mon HTML.
  document.getElementById('html').innerHTML = name;
}
