// var blue = 'bleu';
// var white = 'blanc';
// var red = 'rouge';
// function showPrompt() {
//   var answer = prompt('Quelle est la première couleur du drapeau français? Bleu, Blanc ou rouge?');
//
//   if(answer == white){
//     alert('non blanc est en second');
//   }else if (answer == red) {
//     alert('non rouge est en troisième');
//   }else if (answer == blue) {
//     alert('Bien joué ! ! !');
//   }else {
//     alert('ceci n\'est pas une des réponses attendues.')
//   }
//
// }

function showPrompt() {
  var flag = prompt('Quelle est la première couleur du drapeau français? Bleu, Blanc ou rouge?');
  //la réponse sera automatiquement convertie en minuscule.
  var flag = flag.toLowerCase();

  switch (flag) {

    case 'bleu':
      alert('Bien joué ! ! !');
      break;
      case 'blanc':
        alert('non blanc est en second');
        break;
        case 'rouge':
          alert('non rouge est en troisième');
          break;
    default:
    alert('ceci n\'est pas une des réponses attendues.');
  }

}
