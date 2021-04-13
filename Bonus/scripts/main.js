
alert("Bienvenue dans ce jeu de devinette !");

//Je génère un nombre aléatoire entre 1 et 100
var answer = Math.floor(Math.random() * 100) + 1;

// console.log("(La solution est " + solution + ")");
// je lance la boucle, où i <= au nombre d'essai voulu
for (var i = 0; i <= 10; i++) {
    var guess = Number(prompt("Entrez un nombre entre 1 et 100 pour deviner le nombre aléatoire."));
    if (guess === answer) {
        alert("Vous avez trouvé, bravo !");
		alert("Vous avez trouvé en " + i + " essai(s)")
    // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
        break;
        // comparent la valeur "guess" à la valeur "answer"
    } else if ( guess < answer){
            alert(guess + " est trop petit");
    } else {
            alert(guess + " est trop grand");
    }if (i === 10){
      // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
        alert("Vous avez perdu ! Le nombre était : " + answer); // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
    }
}
