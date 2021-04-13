//je crée un table (une liste).
let array = ['HTML','Javascript','CSS','Bootstrap'];
function show() {
  //le ".sort()" affiche par ordre alphabétique
  alert (array.sort());
  document.getElementById('html').innerHTML = array.sort();
}
